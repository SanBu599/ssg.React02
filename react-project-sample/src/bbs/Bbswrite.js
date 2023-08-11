import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Bbswrite() {

    let navigate = useNavigate();

    
    const [id, setId] = useState("11111");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // useRef : element를 접근 current (찾아보기) ex)그 위치에 커서생기게 하기 
    /*
    const IdChange = (e) => {
        setId(e.target.value);
    };

    const TitleChange = (e) => {
        setTitle(e.target.value);
    };

    const ContentChange = (e) => {
        setContent(e.target.value);
    };

    const Bbswritelist = () => {
        const requestData = {
            id: id,
            title: title,
            content: content
        };

        axios.post('http://localhost:3000/bbswrite',null, {requestData})
            .then(resp => {
                console.log(resp.data);
            })
            .catch(err => {
                alert(err);
            });
    }

    return (
        <div>
            <h1>글쓰기</h1>
            <table>            
                <tbody>
                    <tr>
                        <td className=''>
                            <input value={id} onChange={IdChange} />
                        </td>
                        <td>
                            <input value={title} onChange={TitleChange}  />
                        </td>
                        <td>
                            <textarea value={content} onChange={ContentChange} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={Bbswritelist}>저장하기</button>
        </div>
    )*/

    function writeBbs(){
        if(title === undefined || title.trim()=== ''){
            alert("제목을 작성해주십시오");
            return;
        }

        axios.post('http://localhost:3000/bbswrite', null, {params:{ "id":id, "title":title, "content":content }})
                                                            .then((resp)=>{
                                                                // alert(resp.data);
                                                                alert("등록되었습니다.");
                                                                navigate('/bbslist');
                                                            })
                                                            .catch((err)=>{
                                                                alert(err);
                                                            })
        // 500 err 문법에러
    }

        return(
            <div>
                {/* <h1>글쓰기</h1> */}
                <table border="1">
                    <colgroup>
                        <col width="200" /><col width="500" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>아이디</th>
                            <td>
                                {id}
                            </td>
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td>
                                <input size="100px" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td>
                                <textarea cols="60" rows="20" value={content} onChange={(e)=>setContent(e.target.value)}/>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button onClick={ writeBbs } >작성완료</button>
            </div>
        )

}


export default Bbswrite;

