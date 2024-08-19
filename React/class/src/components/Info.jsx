import React, { useEffect, useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    console.log({
      name,
      nickName,
    });

    return () => {
      console.log('컴포넌트가 죽었습니다 ㅠㅠ');
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickName} onChange={onChangeNickName} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickName}
        </div>
      </div>
    </div>
  );
};

export default Info;
