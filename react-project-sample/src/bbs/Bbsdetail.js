import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'

function Bbsdetail(){
    let params = useParams();
    let navigate = useNavigate();

    const [bbs,setBbs] = useState();

    // 데이터를 읽어 드리는 처리가 끝났는지 확인 하는 변수
    const [loading,setLoading] = useState(false);

    async function getBbs(seq){
        await axios.get('http://localhost:3000/bbsdetail', {params: {"seq":seq}})
                                                    .then(function(resp){
                                                        console.log(resp.data);  
                                                        setBbs(resp.data);    

                                                        setLoading(true);
                                                    }).catch((err)=>{
                                                        alert(err);
                                                    });
    }

    useEffect(function(){
        //alert(params.seq); seq 잘들어왔는지 확인작업
        

        // login 확인
        let login = localStorage.getItem('login');
        if(login !== null){
            let id = (JSON.parse(login)).id;

            getBbs(params.seq);
        }else{
            alert("로그인해주십시오")
            //login으로 이동 => usenavigate 사용
            navigate('/login');
        }

        // getBbs(params.seq);
        
    },[params.seq]);

    if(loading===false){
        return <div>loading...</div>
    }
    
/*    const getDetailList=(s)=>{
        axios.get('http://localhost:3000/bbsdetail'+{param: {"seq":seq}})
                                                    .then(resp=>{
                                                        console.log(resp.data);                                                    
                                                    }).catch(err=>{
                                                        alert(err);
                                                    });
    }
*/

    return(
        <div>
            <h1>글 상세보기</h1>
            <table className="table table-bordered">
                <colgroup>
                    <col style={{width:'150px'}}/>
                    <col style={{width:'500px'}}/>
                </colgroup>
                <tbody>
                    <tr>
                        <th>작성자</th>
                        <td>{bbs.id}</td>
                     </tr>
                    <tr>
                         <th>작성일</th>
                        <td>{bbs.wdate}</td>
                    </tr>
                    <tr>
                        <th>조회수</th>
                        <td>{bbs.readcount}</td>
                    </tr>
                    <tr>                
                        <td colSpan={2} style={{ fontSize:'22px', fontWeight:"bold", lineHeight:"28px" }}>{bbs.title}</td>
                    </tr>
                    <tr>                
                        <td colSpan={2} style={{ height:"300px", fontSize:"120%" }}>                
                            <textarea rows="12" style={{ backgroundColor:"#fff", fontSize:"20px", border:"none" }}                    
                            cols="15" className="form-control" value={bbs.content} readOnly></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Bbsdetail;