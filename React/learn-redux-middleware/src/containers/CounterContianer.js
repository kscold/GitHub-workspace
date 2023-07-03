import { connect } from "react-redux"
import { increase, decrease } from "../modules/counter" //counter.js에서 incresase, decrease
import Counter from "../components/Counter"

const CounterContianer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

export default connect(
    state => ({ //스토어가 지니고 있는 state 상태 스토어는 modules/index.js에 있음
        number: state.counter
    }),
    { //dispatch 설정
        increase, //현재 이벤트가 counter.js에 설정되어 있음
        decrease
    }
)(CounterContianer);