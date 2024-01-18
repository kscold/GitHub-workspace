import { useReducer } from 'react';

function reducer(state, action) {
  // 리듀서 함수 선언
  return {
    ...state, // 이전의 state를 가져와
    [action.name]: action.value, // 새로운 state로 만듬
  };
}

export default function useInput(initialForm) {
  // 매개변수로 객체를 받음
  const [state, dispatch] = useReducer(reducer, initialForm); // 함수 받은 객체들
  const onChange = (e) => {
    dispatch(e.target); // dispatch를 통해 e.target를 갱신
  };
  return [state, onChange];
}
