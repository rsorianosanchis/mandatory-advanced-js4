import React,{Component,useState } from "react";
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
          vgrid[rad][selectedCol].color = vinnare;
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

    }
    const handleReset = ()=>{
    }
    //
    return(
      <div>
        <h1>4 i rad</h1>
        <h2>{vinnare
              ?`vinnare är spelare med ${spelare} tabar`
              :null}
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
