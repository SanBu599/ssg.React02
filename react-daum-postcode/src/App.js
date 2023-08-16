import { useState } from 'react';
import Post from './Post';

function App() {

  const [enroll_Company ,setEnroll_company] = useState({address:'', });
  const [popup,setPopup] = useState(false);

  const handleInput = (e) => {
    setEnroll_company({
      ...enroll_Company,
      [e.target.name]:e.target.value,
    })
  }

  const handleComplete = (data)=>{
    setPopup(!popup);
  }

  return (
    <div>address
      <input placeholder='주소' required={true} name='address' onChange={handleInput} value={enroll_Company.address} />
      <button onClick={handleComplete}>우편번호 찾기</button> 

      { popup && <Post onClose={setPopup} company={enroll_Company} setcompany={setEnroll_company}></Post> }

    </div>
  );
}

export default App;