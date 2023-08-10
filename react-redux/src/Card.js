import { useSelector } from "react-redux";

function Card(){

    const count = useSelector((state)=>state.count);
    const name = useSelector((state)=>state.name);

    return(
        <div>
         <h1>메인</h1>
             <p>name: {name}</p>
             <p>count: {count}</p>
        </div>
    )
}
export default Card;