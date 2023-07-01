

const TodoItem = ({ todo, onToggle, onRemove }) => {
    return (
        <div>
            <input type="checkbox" />
            <span>예제 텍스트</span>
            <button>삭제</button>
        </div>
    );
};

const Todos = ({ //할 일이 들어있는 객체
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
}) => {
    const onSubmit = e => {
        e.preventDefault();
    };
    return (
        <div>
            <form onSubmit={onSubmit}>   {/* <form>태그를 통해 input과 button을 하나로 묶음 */}
                <input />
                <button type='submit'>등록</button>
            </form>
            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>

    )
}

export default Todos;