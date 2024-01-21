import React, { useState } from 'react';
import './MyComponent.scss';

const MyComponent = () => {
  const [message, setMessage] = useState('');

  const onChangeMessageEvert = (e) => {
    console.log(e);
    setMessage(e.target.value);
  };

  const onClick = () => {
    alert(message);
    setMessage('');
  };

  return (
    <>
      <input
        placeholder="입력해주세요"
        value={message}
        onChange={onChangeMessageEvert}
      />
      <button onClick={onClick}>결과</button>
      <div className="Template">{message}</div>
    </>
  );
};

export default MyComponent;
