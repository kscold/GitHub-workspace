import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md'; //인터넷 사이트에서 플러스 아이콘(이름이 MdAdd)을 가져오기 위해서 설정
//import { 아이콘 이름 } from 'react-icons/md'
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);//useCallback은 특정함수를 새로 만들지 않고 재사용하고 싶을 때 사용하는 함수, 첫번째 인자로 넘어온 함수를 
    //두 번째 인자로 넘어온 배열 형태의 함수 실행조건의 값이 변경 될 때까지 저장

    const onSubmit = useCallback(
        e => {
            onInsert(value); //부모 구성요소에 전달하여 해당 값으로 새 작업 항목을 삽입해야 함을 나타냄
            setValue('');

            //submit 이벤트는 브라우저의 새로고침을 발생시키기 떄문에 이를 방지하기 위해 밑에 함수를 호출함
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input
                placeholder='할 일을 입력하세요'
                value={value}
                onChange={onChange}
            />
            <button type='submit'>
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;