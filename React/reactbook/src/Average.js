import React, { useMemo, useState, useCallback, useRef } from 'react'

//여기서 키포인트는 reduce와 map
//중요! 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);

const getAverage = number => {
    console.log('평균값 계산 중..');
    if (number.length === 0) return 0;
    const sum = number.reduce((a, b) => a + b);
    return sum / number.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []); //컴포넌트가 처음 랜더링될 때만

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list])

    const avg = useMemo(() => getAverage(list), [list])
    //useMemo((값),[의존성배열])을 통해 오래걸리는 작업을 단축(재사용성) 컴포넌트 함수 호출 -> 내부변수 초기화가 아니라 메모라이즈 된 함수를 호출

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b>{avg}
            </div>
        </div>
    )
}

export default Average