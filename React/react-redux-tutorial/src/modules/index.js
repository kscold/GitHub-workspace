import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter, //counter.js 파일
    todos, //todos.js 파일
})

export default rootReducer; //파일 이름을 Index.js로 설정하면 나중에 불러올 때 디렉토리 이름까지만 입력하여 불러 올 수 있음