// import React from 'react'

// const IterationSample = () => {
//     const names = ['눈사람', '얼음', '눈', '바람']
//     const nameList = names.map((name, index) => <li key={index}>{name}</li>)
//     return (
//         <ul>
//             {nameList}
//         </ul>
//     )// div 대신 ul 태그도 가능
// }

// export default IterationSamlple

import React, { useState } from 'react'

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' }
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id); //filter는 name.id !== id일 때, 그 원소를 선택하는 거임 == 제거할 때 사용
        setNames(nextNames);
    };

    const nameList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ))

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )
}

export default IterationSample;