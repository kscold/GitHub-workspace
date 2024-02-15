import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useEffect, useReducer, useRef, useState } from 'react';

function todoReducer(todos, action) {
  switch (action.type) {
    case 'LOAD':
      return action.todos;
    case 'INSERT':
      return [...todos, action.todo];
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], () => []);

  const [lastId, setLastId] = useState(() =>
    localStorage.getItem('lastId')
      ? parseInt(localStorage.getItem('lastId'), 0)
      : 0,
  );

  const lastIdRef = useRef(lastId); // lastId 값을 기억
  lastIdRef.current = lastId;

  useEffect(() => {
    localStorage.setItem('lastId', lastId.toString());

    const savedData = localStorage.getItem('saveData');
    if (savedData) {
      dispatch({ type: 'LOAD', todos: JSON.parse(savedData) });
    }
  }, [lastId]);

  const onInsert = useCallback(
    (text) => {
      const newId = lastIdRef.current + 1;
      setLastId(newId);

      const todo = {
        id: newId,
        text,
        checked: false,
      };

      dispatch({ type: 'INSERT', todo });
      localStorage.setItem('saveData', JSON.stringify([...todos, todo]));
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      dispatch({ type: 'REMOVE', id });
      const updatedTodos = todos.filter((todo) => todo.id !== id); // 삭제된 todos 배열

      const adjustedTodos = updatedTodos.map((todo) =>
        todo.id > id ? { ...todo, id: todo.id - 1 } : todo,
      );

      localStorage.setItem('saveData', JSON.stringify(adjustedTodos));

      setLastId(lastIdRef.current - 1);
    },
    [todos],
  );

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
