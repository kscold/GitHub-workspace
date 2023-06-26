import { useState, useRef, useCallback } from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '힙플페 가기',
      checked: true,
    },
    {
      id: 2,
      text: '워터밤 가기',
      checked: true,
    },
    {
      id: 3,
      text: '양양가서 비치발리볼 하기',
      checked: false,
    }
  ]);

  const onToggle = useCallback( //useCallbackd 훅은 onToggle함수를 메모하기 위해 사용, 컴포넌트가 다시 렌더링될 때 함수의 불필요한 재작성 방지
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo, //todos를 todo로 객체를 받아와 ...todo로 복사 후 checked를 반대로 설정
        ),
      );
    },
    [todos],
  );


  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
      //.filter(callback(element[, index[, array]])[,thisAtg]) callbac은 배열의 각 요소에서 실행되는 함수(element 배열에서 처리 중인 현재 요소)
    },
    [todos],
  )

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default App;