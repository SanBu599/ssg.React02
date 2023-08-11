import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie'; // npm i react-cookie

function Login(){

    const [id,setId] = useState("");
    const [pwd,setPwd] = useState("");

    let navigate = useNavigate();



    function getLogin(){
        axios.post('http://localhost:3000/login',null,{params: {"id":id,"pwd":pwd}})
                                                .then((resp)=>{
                                                    if(resp.data !== null && resp.data !== ""){
                                                        alert(resp.data.id + '님 환영합니다');
                                    
                                                        localStorage.setItem("login", JSON.stringify(resp.data));
                                                    }else{
                                                        alert('id 나 password를 확인해 주십시오');
                                                    }
                                                })
                                                .catch((err)=>{
                                                    alert(err);
                                                })
    }

    function loginBtn(){
        console.log(id,pwd);
        getLogin(id,pwd);
        navigate('/');
    }


    useEffect(()=>{
        
    })
    return(
        <div className='login'>
            <h1>로그인화면</h1>
            <table className="table">
                <tbody>
                    <tr>
                        <th>id</th>
                        <td>
                            <input value={id} onChange={(e)=>setId(e.target.value)}/>
                        </td>
                        <td rowSpan="2"  width='100%'>
                            <button value={pwd} onClick={loginBtn}>Login</button>
                        </td>
                    </tr>
                    <tr>
                        <th>pw</th>
                        <td>
                            
                            <span><input type="password" onChange={(e)=>setPwd(e.target.value)}/></span>
                            <span><Link to="/regi">회원가입</Link></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Login;