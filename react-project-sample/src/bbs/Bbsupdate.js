// 내가 한거
// import axios from "axios";
// import { useEffect, useState } from "react";

// import { useNavigate, useParams } from 'react-router-dom'


// function Bbsupdate(){


//     let navigate = useNavigate();

//     const [bbs,setBbs] = useState("");  
//     let params = useParams();


//     const [title, setTitle] = useState();
//     const [content, setContent] = useState();
//     const [seq,setSeq] = useState();

//     function updateBbs(){

//         axios.post('http://localhost:3000/bbsupdate', null, {params:{  "title":title, "content":content ,"seq":params.seq}})
//                                                             .then((resp)=>{
//                                                                 alert(resp.data);
                                                                  
//                                                                 alert("수정되었습니다.");
//                                                                 navigate('/bbslist');
//                                                             })
//                                                             .catch((err)=>{
//                                                                 alert(err);
//                                                             })
//     }
//     async function getBbs(seq){
//         await axios.get('http://localhost:3000/bbsdetail', {params: {"seq":seq}})
//                                                     .then(function(resp){
//                                                         //console.log(resp.data);  
//                                                         setBbs(resp.data);  

                                                       
//                                                     }).catch((err)=>{
//                                                         alert(err);
//                                                     });
//     }


//     useEffect(function(){
//         // alert(params.seq ); //seq 잘들어왔는지 확인작업
//         getBbs(params.seq);
        
//     },[params.seq]);



//     return(
//         <div>
//              {/* <h1>글쓰기</h1> */}
//              <table border="1">
//                     <colgroup>
//                         <col width="200" /><col width="500" />
//                     </colgroup>
//                     <tbody>
//                         <tr>
//                             <th>작성자</th>
//                             <td>
//                                 {bbs.id}
//                             </td>
//                         </tr>
//                         <tr>
//                             <th>제목</th>
//                             <td>
//                                 <input size="100px" value={title} placeholder={bbs.title} onChange={(e)=>setTitle(e.target.value)}/>
//                             </td>
//                         </tr>
//                         <tr>
//                             <th>내용</th>
//                             <td>
//                                 <textarea cols="60" value={content} placeholder={bbs.content} rows="20" onChange={(e)=>setContent(e.target.value)}/>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>

//                 <button onClick={ updateBbs } >수정완료</button>
//         </div>
//     )
// }
// export default Bbsupdate;

// 강사님 한거
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from 'axios';

function Bbsupdate(){
    let history = useNavigate();

    let params = useParams();
    console.log(params.seq);

    const [bbs, setBbs] = useState();

    const [seq] = useState(params.seq);
    const [title, setTitle] = useState('');
    const [content, setContent]  = useState('');

    // 데이터를 모두 읽어 들일 때까지 rendering을 조절하는 변수
    const [loading, setLoading] = useState(false);

    const bbsData = async(seq) => {
        const response = await axios.get('http://localhost:3000/bbsdetail', { params:{"seq":seq} });

        // console.log("bbs:" + JSON.stringify(response.data));
        setBbs(response.data);
        setTitle(response.data.title);
        setContent(response.data.content);

        setLoading(true);   // 여기서 rendering 해 준다
    }

    const titleChange = (e) => setTitle(e.target.value);
    const contentChange = (e) => setContent(e.target.value);

    useEffect(()=>{
        bbsData(params.seq);
    }, [params.seq])

    function updateBbs(){
        axios.post("http://localhost:3000/bbsupdate", null, 
                    { params:{ "seq":seq, "title":title, "content":content } })
             .then(res => {
                console.log(res.data);
                if(res.data === "YES"){
                    alert("성공적으로 수정되었습니다");
                    history('/bbsdetail/' + seq);    // bbslist로 이동
                }else{
                    alert("등록되지 않았습니다");
                }
             })
             .catch(function(err){
                alert(err);
             }) 
    }

    if(loading === false){
        return <div>Loading...</div>
    }

    return (
        <div>
            <table className="table table-sm">
            <colgroup>
                <col width="100px"/><col width="500px"/>
            </colgroup>
            <tbody>
            <tr>
                <th>아이디</th>
                <td>				
                    <input type="text" value={bbs.id} className="form-control form-control-lg" readOnly/>		
                </td>
            </tr>
            <tr>
                <th className="align-middle">제목</th>
                <td>
                    <input type="text" value={title} onChange={titleChange} size="50px" className="form-control form-control-lg"/>
                </td>
            </tr>
            <tr>	
                <td colSpan="2">
                    <textarea rows="18" value={content} onChange={contentChange} className="form-control"></textarea>
                </td>
            </tr>
            <tr>
                <td colSpan="2" align="right" style={{ paddingTop:"20px" }}>
                    <button type="button" onClick={updateBbs} className="btn btn-primary">글수정 완료</button>
                </td>
            </tr>
            </tbody>
            </table>           

        </div>
    );
}

export default Bbsupdate;
