import { combineReducers } from 'redux';
import counter from './counter';
import sample from './sample';
import loading from './loading';

const rootReducer = combineReducers({ //combinReducers로 리듀서 .js를 묶음(switch 문이나 handleActions)
    counter,
    sample,
    loading
});

export default rootReducer;