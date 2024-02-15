// immer 라이브러리를 사용하지 않은 코드
// import React, { useCallback, useRef, useState } from 'react';

// const App = () => {
//   const nextId = useRef(1);
//   const [form, setForm] = useState({ name: '', username: '' });
//   const [data, setData] = useState({
//     array: [],
//     uselessValue: null,
//   });

//   // input 수정을 위한 함수
//   const onChange = useCallback(
//     (e) => {
//       const { name, value } = e.target;
//       setForm({
//         ...form,
//         [name]: value,
//       });
//     },
//     [form]
//   );

//   // form 등록을 위한 함수
//   const onSubmit = useCallback(
//     (e) => {
//       e.preventDefault(); // DTO 방지

//       const info = {
//         // info 객체 형식 생성
//         id: nextId.current, // 현재 ref 값
//         name: form.name,
//         username: form.username,
//       };

//       // array에 새 항목 등록
//       setData({
//         ...data,
//         array: data.array.concat(info),
//       });

//       // form 초기화
//       setForm({
//         name: '',
//         username: '',
//       });

//       nextId.current += 1; // ref id 증가
//     },
//     [data, form.name, form.username]
//   );

//   // 항목을 삭제하는 함수
//   const onRemove = useCallback(
//     (id) => {
//       setData({
//         ...data,
//         array: data.array.filter((info) => info.id !== id), // 현재 id와 info.id 가 같은 값을 제외(삭제)
//       });
//     },
//     [data]
//   );

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           name="username"
//           placeholder="아이디"
//           value={form.username}
//           onChange={onChange}
//         />
//         <input
//           name="name"
//           placeholder="이름"
//           value={form.name}
//           onChange={onChange}
//         />
//         <button type="submit">등록</button>
//       </form>

//       <div>
//         <ul>
//           {data.array.map((info) => (
//             <li key={info.id} onClick={() => onRemove(info.id)}>
//               {info.username} ({info.name})
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;

// // immer 라이브러리를 사용한 코드
// import React, { useCallback, useRef, useState } from 'react';
// import { produce } from 'immer';

// const App = () => {
//   const nextId = useRef(1);
//   const [form, setForm] = useState({ name: '', username: '' });
//   const [data, setData] = useState({
//     array: [],
//     uselessValue: null,
//   });

//   // input 수정을 위한 함수
//   const onChange = useCallback(
//     (e) => {
//       const { name, value } = e.target;
//       setForm(
//         produce(form, (draft) => {
//           draft[name] = value; // 확산 연산자를 써서 불변성 유지를 할 필요없이 produce로 바로 접근
//         })
//       );
//     },
//     [form]
//   );

//   // form 등록을 위한 함수
//   const onSubmit = useCallback(
//     (e) => {
//       e.preventDefault(); // DTO 방지

//       const info = {
//         // info 객체 형식 생성
//         id: nextId.current, // 현재 ref 값
//         name: form.name,
//         username: form.username,
//       };

//       // array에 새 항목 등록
//       setData(
//         produce(data, (draft) => {
//           draft.array.push(info);
//         })
//       );

//       // form 초기화
//       setForm({
//         name: '',
//         username: '',
//       });

//       nextId.current += 1; // ref id 증가
//     },
//     [data, form.name, form.username]
//   );

//   // 항목을 삭제하는 함수
//   const onRemove = useCallback(
//     (id) => {
//       setData(
//         produce(data, (draft) => {
//           draft.array.splice(
//             draft.array.findIndex((info) => info.id === id),
//             1
//           );
//         })
//       );
//     },
//     [data]
//   );

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           name="username"
//           placeholder="아이디"
//           value={form.username}
//           onChange={onChange}
//         />
//         <input
//           name="name"
//           placeholder="이름"
//           value={form.name}
//           onChange={onChange}
//         />
//         <button type="submit">등록</button>
//       </form>

//       <div>
//         <ul>
//           {data.array.map((info) => (
//             <li key={info.id} onClick={() => onRemove(info.id)}>
//               {info.username} ({info.name})
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;

// immer 라이브러리와 useState의 활용
import React, { useCallback, useRef, useState } from 'react';
import { produce } from 'immer';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // input 수정을 위한 함수
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm(
        produce((draft) => {
          draft[name] = value; // 확산 연산자를 써서 불변성 유지를 할 필요없이 produce로 바로 접근
        })
      );
    },
    [form]
  );

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault(); // DTO 방지

      const info = {
        // info 객체 형식 생성
        id: nextId.current, // 현재 ref 값
        name: form.name,
        username: form.username,
      };

      // array에 새 항목 등록
      setData(
        produce((draft) => {
          draft.array.push(info);
        })
      );

      // form 초기화
      setForm({
        name: '',
        username: '',
      });

      nextId.current += 1; // ref id 증가
    },
    [data, form.name, form.username]
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    (id) => {
      setData(
        produce((draft) => {
          draft.array.splice(
            draft.array.findIndex((info) => info.id === id),
            1
          );
        })
      );
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>

      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
