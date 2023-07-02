import { createAction, handleActions } from "redux-actions";
// import { increase } from '../containers/CounterContainer';
// import counter from './counter';

const INCREASE = 'counter/INCREASE' //액션 타입을 정의 모듈이름/액션이름
const DECREASE = 'counter/DECREASE'

// export const increase = () => ({ type: INCREASE }); //increase 객체가 type: INCREASE Key:value 값을 가짐 action은 type을 반드시 가짐
// export const decrease = () => ({ type: DECRAESE });

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
    number: 0,
}// 초기값 설정

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    },
    initialState,
)

// function counter(state = initialState, action) {  //초기 모델의 리듀서 함수를 만들어줌
//     switch (action.type) { //액션 타입
//         case INCREASE:
//             return {
//                 number: state.number + 1 //state=initialState 초기값을 업데이트
//             };
//         case DECRAESE:
//             return {
//                 number: state.number - 1
//             };
//         default:
//             return state;
//     }
// }

export default counter; //export는 여러개를 내보낼 수 있지만, export default는 단 한개만 내보낼 수 있음