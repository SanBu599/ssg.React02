import React from "react";
import DaumPostcode from "react-daum-postcode";
//import './post.css';

const Post = (props) =>{

    const postCodeStyle  = {
        display: "block",
        position: "absolute",
        top: '50%',
        left: '50%',
        transform:'translate(-50%,-50%)',
        width: "600px",
        height: "600px",
        padding: "7px",
        border: "2px solid #666"
      }
      const complete = (data) =>{
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)

        props.setcompany({
          ...props.company,
          address:fullAddress,
        })
      }

      function btnClose(){
        props.onClose(false)
    }

      return (   
        <div style={postCodeStyle}>
            <DaumPostcode                
                autoClose
                onComplete={complete} height={700}/> 
            <button onClick={btnClose}>닫기</button>           
        </div> 
            
    );
};

export default Post;