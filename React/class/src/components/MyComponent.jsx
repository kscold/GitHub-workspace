const MyComponent = ({ name, height, children }) => {
  // 비구조화 할당 문법(객체의 속성명으로 변수를 만듬)
  // const { name, height } = props;

  // const props = {
  //   name: '김승찬',
  //   height: '180',
  // };
  return (
    <div>
      안녕하세요. 제 이름은 {name}입니다.
      <br />제 키는 {height}입니다.
      <br />
      chlidren의 내용은 {children}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
  height: '기본 키',
};

export default MyComponent;
