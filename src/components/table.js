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
  const [row] = useState(Array(6).fill(null));
  //console.log(row);
  const puttingTab = (e) =>{
    console.log(e.target);
  }
  return(
    <div className='column'>
      {row.map((row,index)=>
        <div key= {index} className='row' >
          <div className='tab' column={props.posColumn} onClick={puttingTab} >
        </div>
      </div>)}
    </div>
  )
}
