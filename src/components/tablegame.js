import React,{Component,useState } from "react";
import './style.css';

export function TableGame (){
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
    const handleClick = ()=>{
    }
    const handleReset = ()=>{
    }
    return(
      <div>
        <h1>4 i rad</h1>
        <h2>{vinnare
              ?`vinnare är spelare med ${spelare}`
              :null}
        </h2>
          <div className='bord'>
          {grid.map((column,indexCol)=>column.map((rad,indexRad)=>{
            return(
                <div
                  key={`${indexCol}-${indexRad}`}
                  className={`tab`}
                  style={{background: rad.color?rad.color:'white'}}
                  onClick={!vinnare?()=>handleClick(indexRad):null}
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

//className={`tab_${indexCol}`}
