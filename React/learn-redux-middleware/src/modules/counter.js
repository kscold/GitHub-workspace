import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE); //자동적으로 type를 가지는 배열을 선언
export const decrease = createAction(DECREASE);

const initialState = 0; //상태는 꼭 객체일 필요가 없음, 숫자도 작동

const counter = handleActions(
    {
        [INCREASE]: state => state + 1, //type: 제외 배열에 state의 값을 수정
        [DECREASE]: state => state - 1,
    },
    initialState //초기값 설정
)

export default counter;