import React,{useState} from 'react';
import './colum.css';

/* Table construction */
export function GameTable (){
  const [col]= useState(Array(7).fill(null))
  return(
    <div className='gametable'>
      {col.map((inget,index)=>{
         return(
           <Column key={index} posColumn={index}/>
         )})}
    </div>

  )
}
function Column (props){
  //
  const [row] = useState(Array(6).fill(null));
  //
  const [filledRowsCol0,fillRowCol0] = useState(null);
  const [filledRowsCol1,fillRowCol1] = useState(null);
  const [filledRowsCol2,fillRowCol2] = useState(null);
  const [filledRowsCol3,fillRowCol3] = useState([]);
  const [filledRowsCol4,fillRowCol4] = useState([]);
  const [filledRowsCol5,fillRowCol5] = useState([]);
  //const [selectedColumn,updateSelectedColumn] = useState(null);
  //console.log(row);
  const addTab = (e) =>{
    let value = 0;
    console.log(e.target);
    e.preventDefault();
    value = parseInt(e.target.getAttribute('column')) ;
    console.log(`Selected column är ${value}`);
    //console.log(typeof(value));
    let refPos = null;
    switch (value) {
      case 0:
        console.log(`putting Tab in column 0`);
        if (filledRowsCol0.length < 6) {
          fillRowCol0(filledRowsCol0+1)
          refPos = filledRowsCol0.length;
          console.log(refPos);
        }
        break;
      case 1:
        if (filledRowsCol1.length < 6) {
          console.log('case 1 ');
        }
        break;
      default:
    }
  }
  return(
    <div className='column'>
      {row.map((inget,index)=>
        <div key= {index} className='row' >
          <div className='tab' column={props.posColumn} onClick={addTab} >
        </div>
      </div>)}
    </div>
  )
}
