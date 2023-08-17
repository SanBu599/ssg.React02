import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Bbsdetail(){
    let params = useParams();
    let navigate = useNavigate();

    const [id, setId] = useState('');
    const [bbs, setBbs] = useState();

    // 데이터를 읽어 드리는 처리가 끝났는지 확인
    const [loading, setLoading] = useState(false);

    async function getBbs(seq){
        await axios.get("http://localhost:3000/bbsdetail", {params:{"seq":seq}})
            .then(function(resp){
                console.log(resp.data);
                setBbs(resp.data);                

                setLoading(true);
            })
            .catch(function(err){
                alert(err);
            })
    }

    function deleteBbs(){
        axios.get("http://localhost:3000/bbsdelete",{params : {"seq":params.seq}})
                                    .then(function(resp){
                                        console.log(resp.data);
                                        navigate('./bbslist');
                                    })
                                    .catch(function(err){
                                        alert(err);
                                    })

                                    
    }

    const updateBbs = () => {
        navigate("/bbsupdate/" + bbs.seq);
    }

    const answerBbs = () => {        
        navigate("/bbsanswer/" + bbs.seq);
    }

    function UpdateButtonLoad(){
        if(id !== bbs.id){
            return ""
        }
        return (
            <span>
                &nbsp;<button type="button" onClick={updateBbs} className="btn btn-primary">글 수정</button>
            </span>                        
        )
    }

    useEffect(function(){
        // alert(params.seq);

        // login 확인        
        let login = localStorage.getItem('login');
        if(login !== null){
            let id = (JSON.parse(login)).id;
            setId(id);

            getBbs(params.seq);
        }else{
            alert('login해 주십시오');
            // login으로 이동 -> useNavigate
            navigate('/login');
        }

        //getBbs(params.seq);

    }, [params.seq, navigate]);

    if(loading === false){
        return <div>loading...</div>
    }

    return(
        <div>
            <table className="table table-bordered">
            <colgroup>
                <col style={{ width:'150px' }}/>
                <col style={{ width:'500px' }}/>
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
            </tbody>
            </table>

            <button type="button" onClick={answerBbs} className="btn btn-primary">답글작성</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={deleteBbs} className="btn btn-primary">삭제</button>&nbsp;&nbsp;&nbsp;
            <UpdateButtonLoad />

        </div>
    )
}

export default Bbsdetail;