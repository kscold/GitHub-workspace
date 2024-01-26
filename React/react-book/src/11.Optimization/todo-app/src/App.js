import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useReducer, useRef } from 'react';

function crateBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': // 새로 추가
      return todos.concat(action.todo);
    case 'REMOVE': // 제거
      return todos.filter((todos) => todos.id !== action.id);
    case 'TOGGLE': // 토글
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, crateBulkTodos); // useReducer를 사용할때는 두번째 매개변수에 초기 상태를 넣어주어야함

  // 고윳값으로 사용될 id를 ref를 사용하여 변수에 담음
  const nextId = useRef(2501);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current, // 현재 id로 focus함
        text, // shorthand
        checked: false,
      };

      dispatch({ type: 'INSERT', todo });
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
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
