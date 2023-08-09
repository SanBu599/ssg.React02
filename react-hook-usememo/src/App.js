import {useState, useMemo} from 'react';

/*
  useMemo : 업데이트가 필요 없는 component까지 rendering 의 경우
            이를 방지하기 위해서 사용하는 것이 userMemo
*/
const square = (params) =>{
  console.log("square 함수 실행")
  return params * params;
}

function App() {
  const [countA,setCountA] = useState(0);
  const [countB,setCountB] = useState(0);

  function countResultA(){
    console.log("countA 함수 실행");
    setCountA(countA+1);
  }

  function countResultB(){
    console.log("countB 함수 실행");
    setCountB(countB+1);
  }
  
  const countSum = useMemo(()=>square(countB),[countB]);
    //const countSum = square(countB);
  return (
    <div>
      <p>
        계산결과 A : {countA}
      </p>
      <button onClick={countResultA}>A+1</button>
      <p>
        계산결과 B : {countB}
      </p>
      <button onClick={countResultB}>B+1</button>

      <p>{countA}*{countB} = {countSum}</p> 

    </div>
  );
}

export default App;
