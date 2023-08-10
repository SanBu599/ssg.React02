import { legacy_createStore as createStore } from 'redux';

//////////////////////// reuducer 생성
const initialState = {
    count : 599,
    name : "고길동",
}

const reducer = (state =initialState) =>{
    return state;
}
/////////////////////////

// 데이터 저장 위치 Store 생성
const store = createStore(reducer);

export default store;

// 이렇게 하면 외부에서 접근 가능!!!!!!!!!!!!! store와 state 잘기억하기
