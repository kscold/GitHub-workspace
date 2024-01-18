// import { useState } from 'react';

// const getAverage = (numbers) => {
//   console.log('평균값 계산 중...');
//   if (numbers.length === 0) return 0;

//   const sum = numbers.reduce((a, b) => a + b); // 전부 더한 값을 구함
//   return sum / numbers.length; // numbers 요소의 갯수로 나눔
// };

// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState('');

//   const onChange = (e) => {
//     setNumber(e.target.value);
//   };

//   const onInsert = (e) => {
//     const nextList = list.concat(parseInt(number)); // 숫자로 변환하여 리스트에 반영
//     console.log(nextList);
//     setList(nextList);
//     setNumber('');
//   };

//   return (
//     <div>
//       <input value={number} onChange={onChange} />
//       {/* 인풋창의 number 바뀜에 따라 list값이 바뀌려고 하기 때문에 getAverage를 계속 호출하고 있음 */}
//       <button onClick={onInsert}>등록</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <div>
//         <b>평균값:</b> {getAverage(list)}
//       </div>
//     </div>
//   );
// };

// export default Average;

// useMemo()를 사용
// import { useMemo, useState } from 'react';

// const getAverage = (numbers) => {
//   console.log('평균값 계산 중...');
//   if (numbers.length === 0) return 0;
//   const sum = numbers.reduce((a, b) => a + b); // 전부 더한 값을 구함
//   return sum / numbers.length; // numbers 요소의 갯수로 나눔
// };

// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState('');

//   const onChange = (e) => {
//     setNumber(e.target.value);
//   };
//   const onInsert = () => {
//     const nextList = list.concat(parseInt(number)); // 숫자로 변환하여 리스트에 반영
//     console.log(nextList);
//     setList(nextList);
//     setNumber('');
//   };

//   const avg = useMemo(() => getAverage(list), [list]);

//   return (
//     <div>
//       <input value={number} onChange={onChange} />
//       <button onClick={onInsert}>등록</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <div>
//         <b>평균값:</b> {avg}
//       </div>
//     </div>
//   );
// };

// export default Average;

// useCallback() 사용
// import { useCallback, useMemo, useState } from 'react';

// const getAverage = (numbers) => {
//   console.log('평균값 계산 중...');
//   if (numbers.length === 0) return 0;
//   const sum = numbers.reduce((a, b) => a + b); // 전부 더한 값을 구함
//   return sum / numbers.length; // numbers 요소의 갯수로 나눔
// };

// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState('');

//   const onChange = useCallback((e) => {
//     // 컴포넌트가 처음 랜더링될 때만 함수 생성
//     setNumber(e.target.value);
//   }, []);

//   const onInsert = useCallback(() => {
//     // number 혹은 list가 바뀌었을 때만 함수 생성
//     const nextList = list.concat(parseInt(number)); // 숫자로 변환하여 리스트에 반영
//     console.log(nextList);
//     setList(nextList);
//     setNumber('');
//   }, [number, list]);

//   const avg = useMemo(() => getAverage(list), [list]);

//   return (
//     <div>
//       <input value={number} onChange={onChange} />
//       <button onClick={onInsert}>등록</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <div>
//         <b>평균값:</b> {avg}
//       </div>
//     </div>
//   );
// };

// export default Average;

import { useCallback, useMemo, useState, useRef } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산 중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b); // 전부 더한 값을 구함
  return sum / numbers.length; // numbers 요소의 갯수로 나눔
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    // 컴포넌트가 처음 랜더링될 때만 함수 생성
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    // number 혹은 list가 바뀌었을 때만 함수 생성
    const nextList = list.concat(parseInt(number)); // 숫자로 변환하여 리스트에 반영
    console.log(nextList);
    setList(nextList);
    setNumber('');
    inputEl.current.focus(); // useRef를 사용하여 input 창에 focus를 함
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />{' '}
      {/* ref를 useRef를 사용하여 focus를 가져옴 */}
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
