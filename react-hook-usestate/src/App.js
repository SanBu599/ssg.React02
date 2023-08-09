import react, { useState } from 'react'


//111111111111111111111111111111
// function App() {

//   // useState == getter, setter     초기값
//   const [state,setstate] = useState("클릭");
//   /*
//     변수: state
//   */
//  //setstate('click'); // 외부에서 setter 불가능 / error
//  console.log(state);

//  function btnclick(){
//   setstate("clicked");
//   //state ="clicked"; error
//  }

// // 함수 내부에서만 접근 가능
//   return (
//     <div>
//       <button onClick={()=>btnclick("클릭됨!")}> {state} </button> 
//       {/* <button onClick={btnclick}> {state} </button>  로그에 청아 열리면 바로 찍힘 */}
//     </div>
//   );
// }
// test-1
// function App(){

//   const [textVal,setTextVal] = useState("값이 비었습니다.");
//   const [changeVal,setChangeVal] = useState("값이 있습니다.")

//   function btnclick(){
//     setTextVal("값이 O");
//   }

//   return(
//     <>
//       {textVal}
//       <p>0</p>
//       <button onClick={()=>btnclick()}>버튼</button>

//     </>
//   )
// }

//222222222222222222222222222222
// const INITIAL_COUNT = 0;


// const App = ()=> {
  
//   const [message,setMessage] = useState("");
//   const [number,setNumber] = useState(INITIAL_COUNT);
//   // const [arr,setArr] = useState([]);
//   // const [arr,setArr] = useState(()); JSON

//  const btnclick =() => {
//   alert(message);
//  }

//  const counter = () =>{
//   setNumber(number+1)
//  }

//  const initcount = () =>{
//   setNumber(INITIAL_COUNT);
//  }
//   return(
//     <div>
//       <input onChange={(e)=>{ setMessage(e.target.value) }}/>
//       <button onClick={()=>btnclick()}>메세지보기</button>

//       <p>{number}</p>
//       <button onClick={counter}>counter</button>
//       <button onClick={initcount}>초기화</button>
//     </div>
//   )

// }
// 33333333333333333333333333333333333333
// function App(){

//   const [inputText,setinputText] = useState("초기값");
//   const [text,setText] = useState("react");

// function handChange(e){
//   setinputText(e.target.value);
// }

// function handClick(){
//   setText(inputText);
//   setinputText("");
// }

//   return(

//     <div>
//       <h1>I love {text}</h1>

//       <input type = "text" value={inputText} onChange={handChange}></input>
//       <input type='button' value="입력" onClick={()=>handClick()}/>

//     </div>
//   )

// }
//4444444444444444444444444444444444444444444
// function App(){
//   const [selectVal,setSelectVal] = useState("Html");

//   function selectChange(e){
//     setSelectVal(e.target.value);
//   }

//   function selectChoice(){
//     alert(selectVal);
//   }
//   return(
//     <>
//       <p>현재 선택된 항목 : <b>{selectVal}</b></p>

//       <select value={selectVal} onChange={selectChange}>
//       {/* <select value={selectVal} onChange={(e)=>selectChange(e.target.value)}> */}
//         <option value="Html">Html</option>
//         <option value="Css">Css</option>
//         <option value="React">React</option>
//       </select>
//       <button onClick={()=>selectChoice()}>선택된 항목</button>
//     </>
//   )
// }
// 555555555555555555555555555555555
// function InputRadio(){
//   const [radioValue,setRadioValue]= useState("red")

//   function radioChange(e){
//     setRadioValue(e.target.value);
//   }
//   // == 주소값 비교
//   // === 값을 비교
//   return(
//     <>
//       <p>선택된 항목{radioValue}</p>

//       <input type='radio' value="red" onChange={radioChange} checked={radioValue==="red"}/>red
//       <input type='radio' value="green" onChange={radioChange} checked={radioValue==="green"}/>green
//       <input type='radio' value="blue" onChange={radioChange} checked={radioValue==="blue"}/>blue
//     </>
//   )
// }


// function App(){
  

//   return(
//     <>
//       <InputRadio />
//     </>

//   )

// }
function App(){

  function InputCheck(){

    const [checkboxVal,setCheckboxVal] = useState("id저장")
  
  
    function btnClick(){
      
    }  

    function chekcboxChange(r){
      setCheckboxVal(r.target.value);
    }


    return(
      <div>
        <input type='checkbox' checked={checkboxVal}/> id 저장
        <button onClick={btnClick()}>확인</button>
      </div>
    );
  }

  return(

    <>
      {InputCheck}
    </>

  )
}

export default App;
