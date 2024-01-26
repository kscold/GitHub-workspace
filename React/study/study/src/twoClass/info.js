import React, { useEffect, useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log('처음 렌더링 시에만 완료');
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickame = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input value={name} style={{ width: '150px' }} onChange={onChangeName} />
      <input
        value={nickname}
        style={{ width: '150px' }}
        onChange={onChangeNickame}
      />
      <div>{name}</div>
      <div>{nickname}</div>
    </div>
  );
};

export default Info;
