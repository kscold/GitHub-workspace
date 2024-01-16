// import React, { useEffect, useState } from 'react';

// const Info = () => {
//   const [name, setName] = useState('');
//   const [nickname, setNickname] = useState('');

//   //   useEffect(() => { // 의존성 배열이 없으므로 모든 경우에서 렌더링
//   //     console.log('렌더링이 완료되었습니다!');
//   //     console.log({ name, nickname });
//   //   });

//   //   useEffect(() => { // 처음 컴포넌트가 마운트 될 때 실행
//   //     console.log('마운트될 때만 실행됩니다.');
//   //   }, []);

//   //   useEffect(() => {
//   //     // name이 바뀔 때만 실행
//   //     console.log(name);
//   //   }, [name]);

//   useEffect(() => {
//     // name이 바뀔 때만 실행
//     console.log('effect');
//     console.log(name);

//     return () => {
//       // cleanup 작업
//       console.log('cleanup');
//       console.log(name);
//     };
//   }, [name]);

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };
//   const onChangeNickName = (e) => {
//     setNickname(e.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input value={name} onChange={onChangeName} />
//         <input value={nickname} onChange={onChangeNickName} />
//       </div>
//       <div>
//         <div>
//           <b>이름: {name}</b>
//         </div>
//         <div>
//           <b>닉네임: {nickname}</b>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Info;

// App.js
// import React, { useState } from 'react';
// import Info from './8.Hooks/Info';

// const App = () => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setVisible(!visible)}>
//         {visible ? '숨기기' : '보이기'}
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   );
// };

// export default App;

import { useReducer } from 'react';

function reducer(state, action) {
  return {
    // 바뀐 state 객체를 반환
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
