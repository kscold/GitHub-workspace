import React, { useState } from 'react';
import { Rate } from 'antd';


const App = (): JSX.Element => {
    const [value, setValue] = useState(3);

    // 1단계 방식
    // const onChangeStar = (value: number): void => {
    //     setValue(value) // 여기 value는 객체의 value만 
    // }

    // 2단계 방식
    // const onChangeStar = (value) => setValue(value)



    return (
        // <Rate onChange={onChangeStar} value={value} />
        // 3단계 방식
        // <Rate onChange={(value) => setValue(value)} value={value} />
        <Rate onChange={setValue} value={value} /> // 4단계 방식
    );
};

export default App;