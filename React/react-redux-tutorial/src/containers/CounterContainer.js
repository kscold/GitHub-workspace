import { /*connect,*/ useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter"; //export const increase와 export const decrease가 있기 때문
//import { bindActionCreators } from "redux";
import React, { useCallback } from "react";

// const CounterContainer = ({ number, increase, decrease }) => {
//     return (
//         <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//     );
// };

//mapStateToProps와 mapDispatchProps는 반환하는 객체 내부의 값들을 컴포넌트의 props로 전달

// const mapStateToProps = state => ({ //mapStateToProps는 state를 파라미터로 받아 오며, 이 값은 현재 스토어가 지니고 있는 상태
//     number: state.counter.number,
// });

// const mapDispatchToProps = dispatch => ({ //store의 내장 함수 중요 !dispatch(액션을 발생시키는 것)를 파라미터로 받아옴
//     //임시 함수
//     increase: () => {
//         //console.log('increase');
//         dispatch(increase());
//     },
//     decrease: () => {
//         //console.log('decrease');
//         dispatch(decrease());
//     },
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(CounterContainer);

// export default connect(
//     state => ({
//         number: state.counter.number,
//     }),
//     dispatch => ({
//         increase: () => dispatch(increase()),
//         decrease: () => dispatch(decrease()),
//     }),
// )(CounterContainer);

// export default connect(
//     state => ({
//         number: state.counter.number,
//     }),
//     dispatch =>
//         bindActionCreators(
//             {
//                 increase,
//                 decrease,
//             },
//             dispatch,
//         ),
// )(CounterContainer);

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number); //useSelector 함수를 사용하면 connect 함수를 사용하지 않고도 리덕스의 상태를 조회 가능
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    );
};

export default CounterContainer