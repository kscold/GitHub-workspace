const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋 값을 변경함 모듈이름/액션이름
const INSERT = 'todos/INSERT'; // 새로은 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE'; // todo를 제거함

export const changeInput = input => ({
    type: CHANGE_INPUT,//action을 위해 type을 설정
    input
});

let id = 3; //두개의 값을 미리 넣어놓을 것이기 때문 insert가 호출될 때마다 1씩 더해짐
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
                todos: state.todos.concat(action.todo)
            };
        case TOGGLE:
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