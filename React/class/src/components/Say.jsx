import { useState } from 'react';

const Say = () => {
  const [mesage, setMessage] = useState('등장');
  const [color, setColor] = useState('black');
  //      read     write

  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color: color }}>{mesage}</h1>
      <button
        style={{ backgroundColor: 'red' }}
        onClick={() => setColor('red')}
      >
        빨간색
      </button>
      <button
        style={{ backgroundColor: 'green' }}
        onClick={() => setColor('green')}
      >
        초록색
      </button>
      <button
        style={{ backgroundColor: 'blue' }}
        onClick={() => setColor('blue')}
      >
        파란색
      </button>
    </div>
  );
};

export default Say;
