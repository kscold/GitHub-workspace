const scaleNames = {
  c: "섭씨",
  f: "화씨",
}; //전역 변수로 설정 key:value로 매칭 딕셔너리

function TemperatureInput(props) {
  const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  };

  return (
    <fieldset>
      <legend>온도를 입력해주세요(단위:{scaleNames[props.scale]}):</legend>
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
} //상수 scaleNames을 통해 단위로 변환
//기본적인 컴포넌트를 만듬

export default TemperatureInput;
