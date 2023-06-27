import React, { useCallback } from "react";
import TodoListItem from "./TodoListItem";
import './TodoList.scss'
import { List } from 'react-virtualized'

// const TodoList = ({ todos, onRemove, onToggle }) => {
//     return (
//         <div className="TodoList">
//             {todos.map(todo => (
//                 <TodoListItem
//                     todo={todo}
//                     key={todo.id}
//                     onRemove={onRemove}
//                     onToggle={onToggle}
//                 />
//             ))}
//         </div>
//     );
// };

const TodoList = ({ todos, onRemove, onToggle }) => {
    const rowRenderer = useCallback(
        ({ index, key, style }) => {
            const todo = todos[index];
            return (
                <TodoListItem
                    todo={todo}
                    key={key}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    style={style}
                />
            );
        },
        [onRemove, onToggle, todos],
    );

    return (
        <List
            className="TodoList"
            width={512}//가로 전체 크기
            height={620} //세로 전체 크기 
            rowCount={todos.length} //항목 개수
            rowHeight={57} //항목 높이
            rowRenderer={rowRenderer} //항목을 렌더링할 때 쓰는 함수
            list={todos} //배열
            style={{ outline: 'none' }} //List에 기본 적용되는 outline 스타일 제거
        />
    )
}

export default React.memo(TodoList); //부모 컴포넌트 App 컴포넌트가 todos배열이 업데이트 될 때를 제외하고는 불필요한 리렌더링이 발생하지 않으므로
//당장은 필요 없으나 TodoList 컴포넌트가 불필요한 리렌더링을 할 수도 있기 때문에 React.memo를 미리 최적화 해준 것임