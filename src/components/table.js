import React,{useState} from 'react';
import './colum.css';

/* Table construction */
export function GameTable (){
  const [col]= useState(Array(7).fill(null))
  return(
    <div className='gametable'>
      {col.map((colum,index)=>{
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
  const [filledRows,fillRow] = useState([]);
  const [selectedColumn,updateSelectedColumn] = useState(null);
  //console.log(row);
  const addTab = (e) =>{
    let value = 0;
    console.log(e.target);
    e.preventDefault();
    value = e.target.getAttribute('column') ;
    console.log(`Selected column är ${value}`);
  

  }
  return(
    <div className='column'>
      {row.map((row,index)=>
        <div key= {index} className='row' >
          <div className='tab' column={props.posColumn} onClick={addTab} >
        </div>
      </div>)}
    </div>
  )
}
