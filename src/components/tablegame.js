import React,{useState} from "react";
import './style.css';

export function TableGame (){
  //
  const [grid,updateGrid] = useState([
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}]
    ]);
    const [spelare,bytSpelare] = useState('red');
    const [vinnare,setVinnare] = useState(false);
    const [antalLekar,addLekar]= useState(0);
    //
    const handleClick = (selectedCol)=>{
      const vgrid = [...grid];
      console.log(vgrid);
      for (let rad = vgrid.length-1; rad >=0; rad--){
        if(!vgrid[rad][selectedCol].color){
          const vspelare = spelare === 'red'?'yellow':'red';
          vgrid[rad][selectedCol].color = spelare;
          if(!vinnare){
            kontrollVinnare();
          }
          bytSpelare(vspelare);
          updateGrid(vgrid);
          addLekar(antalLekar+1);
          return;
        }
      }
    }
    //
    const kontrollVinnare = ()=>{
      for (let rad = 0; rad < grid.length; rad++) {
        for (let col = 0; col < grid[rad].length; col++) {
          if (grid[rad][col].color && grid[rad][col + 3]) {
            if (
              grid[rad][col].color === spelare &&
              grid[rad][col + 1].color === spelare &&
              grid[rad][col + 2].color === spelare &&
              grid[rad][col + 3].color === spelare
            ) {
              slutSpel();
              return;
            }
          }
          if (grid[rad][col].color && grid[rad + 3]) {
            if (
              grid[rad][col].color === spelare &&
              grid[rad + 1][col].color === spelare &&
              grid[rad + 2][col].color === spelare &&
              grid[rad + 3][col].color === spelare
            ) {
              slutSpel();
              return;
            }
          }
          if (grid[rad][col].color && grid[rad + 3] && grid[rad][col + 3]) {
            if (
              grid[rad][col].color === spelare &&
              grid[rad + 1][col + 1].color === spelare &&
              grid[rad + 2][col + 2].color === spelare &&
              grid[rad + 3][col + 3].color === spelare
            ) {
              slutSpel();
              return;
            }
          }
          if (grid[rad][col].color && grid[rad + 3] && grid[rad][col - 3]) {
            if (
              grid[rad][col].color === spelare &&
              grid[rad + 1][col - 1].color === spelare &&
              grid[rad + 2][col - 2].color === spelare &&
              grid[rad + 3][col - 3].color === spelare
            ) {
              slutSpel();
              return;
            }
          }
        }
      }
    }
    const handleReset = ()=>{
      console.log('reset');
      updateGrid([
          [{}, {}, {}, {}, {}, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}]
        ]);
        addLekar(0);
        setVinnare(false);
        bytSpelare('red');
    }

    const slutSpel = ()=>{
      addLekar(0);
      setVinnare(true);
    }
    //
    return(
      <div>
        <h1>4 i rad</h1>
        <h2>{vinnare
              ?`vinnare är spelare med ${spelare==='red'?'yellow':'red'} tabar`
              :null}
              {antalLekar === 42 && !vinnare?'ingen vinns':null}
        </h2>
          <div className='bord'>
          {grid.map((column,indexRad)=>column.map((rad,indexCol)=>{
            return(
                <div
                  key={`${indexCol}-${indexRad}`}
                  className={`tab`}
                  style={{background: rad.color?rad.color:'white'}}
                  onClick={!vinnare?()=>handleClick(indexCol):null}
                >
                </div>
            )
          }))}
          </div>
          {vinnare || antalLekar === 42
            ?<button onClick={handleReset}>Reset</button>
            :null
          }
        </div>
    )
}
