import react, { createContext, useContext, useState } from 'react';
import First from './First';

// /*
//   useContext : 전역변수의 역할

//   A component

//   B component

//   C component 
// */

// // useContext를 사용하지 않은 경우
// function App() {
//   const [name, setName] = useState("전달할 값");
  
//   return (

//     <div>
//       <firstComp name={name}/>
//     </div>
//   );
// }
// const SampleContextObj = createContext(); 
// function UserComponent(){
//   const msg = useContext(SampleContextObj)

//   return (

//     <div>
//       <h3>전달된 메시지: {msg}</h3>
//     </div>
//   )
// }

// function App(){

//   const message = "I love react";
  
//   return(
//     <div>
//       <SampleContextObj.Provider value={message}>
//         <UserComponent />
//       </SampleContextObj.Provider>  
//     </div>
//   )
// }
// First - > Third
function App(){

  return(
    <div>
      <First />
    </div>
  )
}


export default App;
