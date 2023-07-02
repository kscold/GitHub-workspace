import { createAction, handleActions } from 'redux-actions';
//import { changeInput, remove } from './todos';
import { produce } from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋 값을 변경함 모듈이름/액션이름
const INSERT = 'todos/INSERT'; // 새로은 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE'; // todo를 제거함

// export const changeInput = input => ({
//     type: CHANGE_INPUT,//action을 위해 type을 설정
//     input
// });

export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3; //두개의 값을 미리 넣어놓을 것이기 때문 insert가 호출될 때마다 1씩 더해짐
// export const insert = text => ({
//     type: INSERT,//action을 위해 type을 설정
//     todo: {
//         id: id++,
//         text,
//         done: false
//     }
// });

export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false,
}));

// export const toggle = id => ({
//     type: TOGGLE, //action을 위해 type을 설정
//     id
// });

export const toggle = createAction(TOGGLE, id => id);


// export const remove = id => ({
//     type: REMOVE, //action을 위해 type을 설정
//     id
// })

export const remove = createAction(REMOVE, id => id);// createAction을 사용하여, 자동적으로 필수인 type을 생성해주고, payload인 id 객체를 지정
//export const remove = createAction(REMOVE)라면
//export const remove = payload => ({
//     type:REMOVE,
//     payload,
// })

const initialState = { //state = initialState에는 type이 없어도 됨 초기 상태의 reducer함수를 작성, 객체에 한 개 이상의 값이 들어가므로 불변성 유지!
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false
        }
    ]
};

// function todos(state = initialState, action) {
//     switch (action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.input
//             };

//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todo)
//             };
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map(todo =>
//                     todo.id === action.id ? { ...todo, done: !todo.done } : todo
//                 )
//             };
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter(todo => todo.id !== action.id)
//             };
//         default:
//             return state;
//     }
// }

const todos = handleActions( //switch 문을 대체
    {
        // [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }), //input: action.payload이런 식으로 사용하면 모든 추가 데이터 값을 
        //action.patload로 사용하기 때문에 나중에 리듀서 코드를 다시 볼 때 헷갈리 수 있음. 
        //따라서 객체 비구조화 할당 문법으로 action값의 payload 이름을 새로 설정

        [CHANGE_INPUT]: (state, { payload: input }) =>
            produce(state, draft => {
                draft.input = input;
            }),

        // ({
        // ...state,
        // todos: state.todos.concat(todo),
        //  }), 대신 produce의 push 사용

        [INSERT]: (state, { payload: todo }) =>
            produce(state, draft => {
                draft.todos.push(todo)
            }),

        [TOGGLE]: (state, { payload: id }) =>
            produce(state, draft => {
                const todo = draft.todos.find(todo => todo.id === id);
                todo.done = !todo.done;
            }),
        [REMOVE]: (state, { payload: id }) =>
            produce(state, draft => {
                const index = draft.todos.findIndex(todo => todo.id === id);
                draft.todos.splice(index, 1);
            }),
    },
    initialState, //초기값 설정
);


export default todos;