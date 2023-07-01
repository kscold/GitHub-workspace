const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋 값을 변경함
const INSERT = 'todos/INSERT'; //모듈이름/액션이름
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = input => ({
    type: CHANGE_INPUT,//action을 위해 type을 설정
    input
});

let id = 3; //두개의 값을 미리 넣어놓을 것이기 때문
export const insert = text => ({
    type: INSERT,//action을 위해 type을 설정
    todo: {
        id: id++,
        text,
        done: false
    }
});

export const toggle = id => ({
    type: TOGGLE, //action을 위해 type을 설정
    id
});

export const remove = id => ({
    type: REMOVE, //action을 위해 type을 설정
    id
})

const initialState = { ////state = initialState에는 type이 없어도 됨
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

function todos(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            };
        case INSERT:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? { ...todo, done: !todo.done } : todo
                )
            };
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
        default:
            return state;
    }
}

export default todos;