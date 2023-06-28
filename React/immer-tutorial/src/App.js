import { useRef, useState, useCallback } from 'react';
import { produce } from 'immer';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  //name input수정을 위한 함수
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      // setForm({
      //   ...form,
      //   [name]: value //아마 책에 [value] 라고 나와있는 것은 오류 인 듯
      // })
      setForm(
        produce(draft => {
          draft[name] = value;
        })
      );
    },
    []
  );

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = { //이 변수는 그냥 대입 목적이기 때문에 ...사용안함
        id: nextId.current,
        name: form.name,
        username: form.username
      };

      // setData({
      //   ...data,
      //   array: data.array.concat(info)
      // });

      setData(
        produce(draft => {
          draft.array.push(info);
        })
      );

      setForm({
        name: '',
        username: ''
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  //항목을 삭제하는 함수
  const onRemove = useCallback(
    id => {
      // setData({
      //   ...data,
      //   array: data.array.filter(info => info.id !== id)

      setData(
        produce(draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1)
        })
      );
    },
    []
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
        <ul>  {/* 동그라미 기호 */}
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div >
  )
}

export default App;