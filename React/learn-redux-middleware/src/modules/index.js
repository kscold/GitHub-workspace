import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({ //combinReducers로 리듀서 .js를 묶음(switch 문이나 handleActions)
    counter
});

export default rootReducer;