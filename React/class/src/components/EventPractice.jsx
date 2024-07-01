import React, { useState } from 'react';

const EventPractice = () => {
  const [message, setMessage] = useState('');

  const onChangeMessage = (e) => {
    console.log(e);
    setMessage(e.target.value);
  };

  const onClickMessage = (e) => {
    e.preventDefault();
    alert(message);
    setMessage('');
  };

  return (
    <form onSubmit={onClickMessage}>
      <h1>이벤트 연습</h1>
      <input
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChangeMessage}
      />
      <button>확인</button>
    </form>
  );
};

export default EventPractice;
