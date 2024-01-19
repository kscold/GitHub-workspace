import React, { useEffect, useState } from 'react';
import './ColorDiv.scss';

const ColorDiv = () => {
  const [color, setColor] = useState('');
  const [tmpColor, setTmpColor] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('렌더링: ', color);
    if (message) {
      alert(message);
      setMessage('');
    }
  }, [color, message]);

  const isValidColor = (inputColor) => {
    const s = new Option().style;
    // console.log(s);
    s.color = inputColor;
    return s.color !== '';
  };

  const onChangeColor = (e) => {
    setTmpColor(e.target.value);
  };

  const onClickColor = () => {
    if (
      tmpColor.trim() !== '' &&
      tmpColor !== color &&
      isValidColor(tmpColor)
    ) {
      setColor(tmpColor);
      setMessage('색깔이 변경되었습니다.');
    } else if (tmpColor.trim() === '') {
      setMessage('색깔이 비어있습니다. 다시 입력해주세요.');
    } else if (tmpColor === color) {
      setMessage('이전과 동일한 색깔입니다.');
    } else {
      setMessage('유효하지 않은 색깔입니다.');
      setTmpColor('');
    }
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClickColor();
    }
  };

  return (
    <div className="Template">
      <input
        name="color"
        className="ColorInput"
        placeholder="색깔을 입력해주세요"
        onChange={onChangeColor}
        value={tmpColor}
        onKeyPress={onKeyPress}
      />
      <button name="color" className="ColorBtn" onClick={onClickColor}>
        변화
      </button>
      <span className="ColorText">결과 색깔</span>
      <div className="ColorDiv" style={{ backgroundColor: color }} />
    </div>
  );
};

export default ColorDiv;
