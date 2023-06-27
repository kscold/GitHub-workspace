import { useState, useRef, useCallback, useReducer } from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });//map을 쓰기 위해 index(id)와 key(test, checked)를 만들어주는 것이 좋음
  }
  return array;
}

function todoReducer(todos, action) { //useReducer을 사용하기 위한 함수를 따로 만들어놓음
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo);
    default:
      return todos;
  }
}

const App = () => {
  //const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  // state는 우리가 앞으로 컴포넌트에서 사용 할 수 있는 상태, dispatch는 액션을 발생시키는 함수
  //dispatch({type: 'INCREMENT'}) 같이 사용, useReducer(reducer 함수, 초기 상태, 처음 생성될 때 초기값) 

  const nextId = useRef(2501);


  // const App = () => {
  //   const [todos, setTodos] = useState([
  //     {
  //       id: 1,
  //       text: '힙플페 가기',
  //       checked: true,
  //     },
  //     {
  //       id: 2,
  //       text: '워터밤 가기',
  //       checked: true,
  //     },
  //     {
  //       id: 3,
  //       text: '양양가서 비치발리볼 하기',
  //       checked: false,
  //     }
  //   ]);


  // const onInsert = useCallback(
  //   text => {
  //     const todo = {
  //       id: nextId.current, //현재 current는 기본값인 4가 됨
  //       text,
  //       checked: false,
  //     };
  //     setTodos(todos => todos.concat(todo)); //concat은 기존 배열을 토대로 변경한 새로운 배열이 리턴됨
  //     nextId.current += 1; // 이 구문을 이용해서 현재 아이디 4가 5가 됨
  //   },
  //   [],
  // ) //useState 일반적인 객체를 통한 최적화 방법

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    }
    dispatch({ type: 'INSERT', todo }); //todoReducer(todos, action) 에서 action이 todo, todos는 함수의 파라미터
    nextId.current += 1;
  }, [])


  // const onRemove = useCallback(
  //   id => {
  //     setTodos(todos => todos.filter(todo => todo.id !== id));
  //     //.filter(callback(element[, index[, array]])[,thisAtg]) callbac은 배열의 각 요소에서 실행되는 함수(element 배열에서 처리 중인 현재 요소)
  //     //.filter 함수에는 조건을 확인해 주는 함수를 파라미터로 넣어주어야 한다. 파라미터로 넣는 함수는 true or false값을 반환해야 하며, true만 배열에 포함
  //   },
  //   [],
  // )

  const onRemove = useCallback(id => {
    dispatch({ type: 'REMOVE', id });
  }, []);


  //const nextId = useRef(4); //랜더링 시 바뀌지 않는 변수 즉 리랜더링 되지 않음 setTimeout, setInterval을 통해서 만들어진 id 등에 사용
  //지금 처럼 nextId를 만들 때 사용 useRef를 사용하면 current값이 기본값이 됨


  // const onToggle = useCallback( //useCallbackd 훅은 onToggle함수를 메모하기 위해 사용, 컴포넌트가 다시 렌더링될 때 함수의 불필요한 재작성 방지 -> 최적화
  //   id => {
  //     setTodos(todos =>
  //       todos.map(todo => //.map(key, index) 이미 todo에는 id라는 index와 key text나 checked가 있음
  //         todo.id === id ? { ...todo, checked: !todo.checked } : todo, //todos를 todo로 객체를 받아와 ...todo로 복사 후 checked를 반대로 설정
  //       ),
  //     );
  //   },
  //   [],
  // );//첫번째 인자로 넘어온 함수를 두번째 인자로 넘어온 배열 내의 값이 변경될 때까지 저장해놓고 재사용 -> 원하는 값만 콘솔 로그를 남기기 위해 사용

  const onToggle = useCallback(id => {
    dispatch({ type: 'TOGGLE', id });
  }, []);


  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;