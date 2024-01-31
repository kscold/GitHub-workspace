import React, { useState } from 'react';

const TTS = () => {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(input);
    synth.speak(utterThis);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange}></input>
        <button type="submit">TTS 실행</button>
      </form>
      <div>{input}</div>
    </div>
  );
};

export default TTS;
