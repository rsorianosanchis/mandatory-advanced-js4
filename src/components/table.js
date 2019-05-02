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
/***********************************************************************/
function Column (props){
  //
  const [row] = useState(Array(6).fill(null));
  //
  const [spelare,setSpelare] = useState(0);
  const [colorTab,setColorTab]= useState('yellow');
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
  const changeGamer = ()=>{
    if(spelare === 0){
      setSpelare(1);
      setColorTab('red');
    }else{
      setSpelare(0);
      setColorTab('yellow');
    }
    console.log(`spelare is ${spelare} och color is ${colorTab}`);
    console.log();
  }
  //
  const addNewTabOnCol = (arr,updateArr,newTab)=>{
    const adding = [...arr,newTab];
    updateArr(adding);
    console.log(arr)
}
  //

  const addTab = (e) =>{
    e.preventDefault();

    let colNum = null;
    let rowNum = null;
    console.log(e.target);
    colNum = parseInt(e.target.getAttribute('column')) ;
    console.log(filledRowsCol0);
    //console.log(`Selected column är ${colNum}`);
    //console.log(typeof(value));
    //console.log(`rowNum es ugual a: ${rowNum}`);
    switch (colNum) {
      case 0:
        console.log(`putting Tab in column 0`);
        console.log(filledRowsCol0.length);
        if (filledRowsCol0.length < 6 ) {
            addNewTabOnCol(filledRowsCol0,fillRowCol0,spelare);
            changeGamer();
            console.log('dentroo de if');
        }
        rowNum = filledRowsCol0.length;
        // if(filledRowsCol0.length === 0){
        //   changeGamer();
        // }
        console.log(rowNum);
        console.log(filledRowsCol0);
        break;
      case 1:
        break;
      default:
      // ingen winns , table full av Tabs
    }

  }
  //
  const paintTab = (posCol,posRad)=>{
    const selTab = document.querySelector

  }
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
