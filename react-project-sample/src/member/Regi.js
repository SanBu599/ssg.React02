import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Regi(){

    let navigate = useNavigate();

    const [id,setId] = useState("");
    const [pwd,setPwd] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
   
    
    

    function regiBtn(){
        axios.post('http://localhost:3000/addmember',null,{params:{"id":id,"pwd":pwd,"name":name,"email":email}})
        .then(function(resp){
            console.log(resp.data);
            alert("회원가입완료");
            navigate("/login");
        })
        .catch(function(err){
            alert(err);
        })
    }   

    return(
        <div>
            <h1>회원가입</h1>
            <table>
                <tbody>
                    <tr>
                        <th>아이디</th>
                        <td>
                            <input value={id} onChange={(e)=>setId(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <th>비밀번호</th>
                        <td>
                            <input value={pwd} type="password" onChange={(e)=>setPwd(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <th>이름</th>
                        <td>
                            <input value={name} onChange={(e)=>setName(e.target.value)}/>   
                        </td>
                    </tr>
                    <tr>
                        <th>이메일</th>
                        <td>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <button onClick={regiBtn}>회원가입</button>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Regi;