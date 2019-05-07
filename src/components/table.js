import React,{useState} from 'react';
import './colum.css';

/* Table construction */
export function GameTable (){
  //const grid = Array(7).fill(null).map(x => Array(6).fill(<div className= 'tab' ></div>));
  const grid = Array(7).fill(null).map(x => Array(6).fill(null));
  console.log(grid);
  return(
    <div className='gametable'>
      {grid.map((inget,index)=>{
         return(
           <Column key={index} posColumn={index}/>
         )})}
    </div>
  )
}
/***ALLA MINA TESTINGAR ÄR NUVARANDE BARA PÅ COL 1 (INDEX 0)**************/
function Column (props){
  //
  const [row] = useState(Array(6).fill(null));
  //
  const [spelare,setSpelare] = useState(0);
  const [colorTab,setColorTab]= useState('yellow');
  const [testColor,setTestColor]= useState('');
  //
  const [filledRowsCol0,fillRowCol0] = useState([]);
  // const [filledRowsCol1,fillRowCol1] = useState([]);
  // const [filledRowsCol2,fillRowCol2] = useState([]);
  // const [filledRowsCol3,fillRowCol3] = useState([]);
  // const [filledRowsCol4,fillRowCol4] = useState([]);
  // const [filledRowsCol5,fillRowCol5] = useState([]);
  // const [filledRowsCol6,fillRowCol6] = useState([]);
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
    console.log(`Selected column är ${colNum}`);
    //console.log(typeof(value));

    switch (colNum) {
      case 0:
        //testing i col 1 (index0)
        rowNum = filledRowsCol0.length;
        console.log(`row att måla är ${rowNum}`);
        console.log(`putting Tab in column 0`);
        console.log(filledRowsCol0.length);
        if (filledRowsCol0.length < 6 ) {
            console.log('inne');
            addNewTabOnCol(filledRowsCol0,fillRowCol0,spelare);
            changeGamer();
        }
        console.log(filledRowsCol0);
        /* nu kommer att måla den korrekta Tab
        nu vi borde hämta igenom DOM den korrekta div med anväding
        ovanfor referenser colNum och rowNum.
        När Row är 0 vi måste måla den sista då kommer vi att fixa det.
        */
        let transformPosition = 6-rowNum;
        console.log(transformPosition);
        let tabAtPaint = document.getElementsByClassName(`tab ${transformPosition}${colNum}`);
        console.log(tabAtPaint);
        let tabAtPaintDiv = tabAtPaint[0];
        //tabAtPaint.className.add = 'red'
        console.log(tabAtPaintDiv);

        /*************/
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      default:
      // ingen winns , table full av Tabs
    }

  }
  //
  // const paintTab = (posCol,posRad)=>{
  // const selTab = document.querySelector
  //
  // }
  //
  return(
    <div className='column'>
      {row.map((inget,index)=>
        {let refi = `tab ${index}${props.posColumn}`;
          return(
            <div key= {index} className='row' >
              <div className={refi}  column={props.posColumn} onClick={addTab}>{refi}</div>
            </div>)
          }
        )
      }
    </div>
  )
}
