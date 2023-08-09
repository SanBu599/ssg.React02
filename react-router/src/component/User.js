import {useNavigate} from 'react-router-dom'

function User(){

    const navi = useNavigate();

    function homemove(){
        navi('/');
        // location.href = "/";
    }


    return(
        <div>
            <h3>User</h3>

            <button onClick={ homemove }>Home</button>
        </div>
    )
}
export default User;