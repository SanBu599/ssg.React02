import react, { useEffect, useState } from 'react'
/*
  useeffect():  // component가 randering 될 때 특정 작업을 실행
                   무한 루프가 될 가능성이 있다.
*/

// function App() {
//   const [count,setCount] = useState(0);
//   const [number, setNumber] =useState(0);

//   console.log('App() 실행')

//   function counter(){
//     setCount(count+1);
//   }

//   function numberCount(){
//     setNumber(number+1)
//   }

//   function increase(){
//     setNumber(number+1);
//   }
//   function decrease(){
//     setNumber(number-1);
//   }
//   function reset(){
//     setNumber(0);
//   }

  // 1. rendering 될 때마다 (ex) 게임만들떄 )
  // useEffect(function(){   // -> update
  //   console.log('useeffect',count);
  // })

  // 2. 처음 rendering 될 때 만
  // useEffect(function(){   // -> update
  //   console.log('useeffect',count);
  // },[])

  // 3. 특정 값(변수)의 변경되었을 때만 실행!
//   useEffect(function(){   // -> update
//     console.log('useeffect',number);
//   },[count,number])


//   return (
//     <div>
//       <p>카운터:{count}</p>
//       <button onClick={()=>counter()}>counter</button>
//       <p>카운터:{number}</p>
//       <button onClick={()=>numberCount()}>number</button>
//       <button onClick={()=>console.log("클릭")}>클릭</button>
//       <p>카운터:{number}</p>
//       <button onClick={()=>increase()}>증가</button>
//       <button onClick={()=>decrease()}>감소</button>
//       <button onClick={()=>reset()}>리셋</button>
//     </div>
//   );
// }
function App(){

  const [checkboxVal,setCheckboxVal] = useState("true")

  function InputCheck(){

   
    function btnClick(){
      if(checkboxVal==="true"){
        setCheckboxVal("false");
      }else{
        setCheckboxVal("true");
      }
      
      console.log({checkboxVal})
    }

    function checkbox(r){
      setCheckboxVal(r.target.value);
    }
    return(
      <div>
        <h1>{checkboxVal}</h1>
        <input type='checkbox' onClick={()=>btnClick()} value={checkboxVal==="false"} /> id 저장
        
      </div>
    )
    }
  return(
    <>
      <InputCheck/>
    </>

  )
}
export default App;
