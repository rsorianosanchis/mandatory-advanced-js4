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
  const [filledRowsCol0,fillRowCol0] = useState([]);
  const [filledRowsCol1,fillRowCol1] = useState([]);
  const [filledRowsCol2,fillRowCol2] = useState([]);
  const [filledRowsCol3,fillRowCol3] = useState([]);
  const [filledRowsCol4,fillRowCol4] = useState([]);
  const [filledRowsCol5,fillRowCol5] = useState([]);
  const [filledRowsCol6,fillRowCol6] = useState([]);
  //const [selectedColumn,updateSelectedColumn] = useState(null);
  //console.log(row);
  //
  const addTab = (e) =>{
    let value = 0;
    console.log(e.target);
    e.preventDefault();
    value = parseInt(e.target.getAttribute('column')) ;
    console.log(`Selected column är ${value}`);
    //console.log(typeof(value));
    let refPos = null;
    console.log(`refPos es ugual a: ${refPos}`);
    switch (value) {
      case 0:
        console.log(`putting Tab in column 0`);
        console.log(filledRowsCol0.length);
        if (filledRowsCol0.length < 6) {
          fillRowCol0(filledRowsCol0+1)
          refPos = filledRowsCol0.length;
          console.log(refPos);
        }
        break;
      case 1:
        console.log(`putting Tab in column 0`);
        console.log(filledRowsCol1.length);
        if (filledRowsCol1.length < 6) {
          fillRowCol1(filledRowsCol1+1)
          refPos = filledRowsCol1.length;
          console.log(refPos);
        }
        break;
      case 2:
        console.log(`putting Tab in column 0`);
        console.log(filledRowsCol2.length);
        if (filledRowsCol2.length < 6) {
          fillRowCol2(filledRowsCol2+1)
          refPos = filledRowsCol2.length;
          console.log(refPos);
        }
        break;
      case 3:
        console.log(`putting Tab in column 0`);
        console.log(filledRowsCol3.length);
        if (filledRowsCol3.length < 6) {
          fillRowCol3(filledRowsCol3+1)
          refPos = filledRowsCol3.length;
          console.log(refPos);
        }
        break;
      case 4:
        console.log(`putting Tab in column 0`);
        console.log(filledRowsCol4.length);
        if (filledRowsCol4.length < 6) {
          fillRowCol4(filledRowsCol4+1)
          refPos = filledRowsCol4.length;
          console.log(refPos);
        }
        break;
      case 5:
        console.log(`putting Tab in column 0`);
        console.log(filledRowsCol5.length);
        if (filledRowsCol5.length < 6) {
          fillRowCol5(filledRowsCol5+1)
          refPos = filledRowsCol5.length;
          console.log(refPos);
        }
        break;
      case 6:
        console.log(`putting Tab in column 0`);
        console.log(filledRowsCol6.length);
        if (filledRowsCol6.length < 6) {
          fillRowCol6(filledRowsCol6+1)
          refPos = filledRowsCol6.length;
          console.log(refPos);
        }
        break;
      default:
      // ingen winns , table full av Tabs
    }
  }
  //

  //
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
