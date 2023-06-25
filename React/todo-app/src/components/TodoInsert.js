import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md'; //인터넷 사이트에서 플러스 아이콘(이름이 MdAdd)을 가져오기 위해서 설정
//import { 아이콘 이름 } from 'react-icons/md'
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);//실시간으로 콜백을 하여 렌더링을 확인 []를 사용했으므로 처음 랜더 때만 등장

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');

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