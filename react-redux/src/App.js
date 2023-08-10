// import store from "./store/index"; 1번 방식(불러오기)
import { useSelector } from "react-redux";  // 2번 방식(불러오기)
import Counter from "./Counter";
import Card from "./Card";

function App() {

  const count = useSelector((state)=>state.count);

  return (
    <div>
      <h1>App</h1>

      {/* <p>count : {store.getState().count}</p> */}  {/* 1번째 방식 */}

      <p>카운터: {count} </p> {/* 2번째 방식 */}

      <Counter />

      <Card />
    </div>
  );
}

export default App;
