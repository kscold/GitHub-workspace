import { combineReducers } from 'redux';
import counter from './counter';
import sample from './sample';

const rootReducer = combineReducers({ //combinReducers로 리듀서 .js를 묶음(switch 문이나 handleActions)
    counter,
    sample
});

export default rootReducer;