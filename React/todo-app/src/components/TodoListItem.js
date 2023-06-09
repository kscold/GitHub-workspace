import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames' //React에서는 class가 예약어로 사용중이기 떄문에 이를 해결하기 위해 나온 라이브러리
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
    const { id, text, checked } = todo; //비구조화 할당으로 App.js에 있는 데이터를 변수에 저장 text = todo.text

    return (
        <div className="TodoListItem-virtualized" style={style}>
            <div className='TodoListItem'>
                <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    <div className='text'>{text}</div>
                </div>
                <div className='remove' onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline />
                </div>
            </div >
        </div>
    );
};

export default React.memo(TodoListItem); //이전 랜더된 결과와 비교하여 DOM 업데이트를 결정한다.