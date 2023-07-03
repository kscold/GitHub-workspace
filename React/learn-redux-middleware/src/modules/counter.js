import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE); //자동적으로 type를 가지는 배열을 선언
export const decrease = createAction(DECREASE);

//1초 뒤에 increase 혹은 decrease 함수를 디스패치함
export const increaseAsync = () => dispatch => { //정의되어 있는 변수 dispatch
    setTimeout(() => {
        dispatch(increase());
    }, 1000);
};

export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease());
    }, 1000);
};

const initialState = 0; //상태는 꼭 객체일 필요가 없음, 숫자도 작동

const counter = handleActions(
    {
        [INCREASE]: state => state + 1, //type: 제외 배열에 state의 값을 수정
        [DECREASE]: state => state - 1,
    },
    initialState //초기값 설정
)

export default counter;