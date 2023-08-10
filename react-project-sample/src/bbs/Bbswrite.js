import React, { useState } from 'react';
import axios from 'axios';

function Bbswrite() {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const Bbswritelist = () => {
        const requestData = {
            id: id,
            title: title,
            content: content
        };

        axios.post('http://localhost:3000/bbswrite', requestData)
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
                            <input value={id} onChange={handleIdChange} />
                        </td>
                        <td>
                            <input value={title} onChange={handleTitleChange}  />
                        </td>
                        <td>
                            <textarea value={content} onChange={handleContentChange} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={Bbswritelist}>저장하기</button>
        </div>
    )
}

export default Bbswrite;

