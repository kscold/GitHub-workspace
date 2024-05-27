const Name = () => {
  const name = '김승찬';
  //  ?(삼항 연산자) && (and 연산자)

  return (
    <div>
      {name === '김승찬' ? <h1>이름 입니다.</h1> : <h1>이름이 아닙니다.</h1>}
    </div>
  );
};

export default Name;
