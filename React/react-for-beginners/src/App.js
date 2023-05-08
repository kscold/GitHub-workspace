import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1> {/*모듈 css는 className과 같이 사용*/}
      <Button text={"Continue"} /> {/* 버튼이 있는 함수 js를 임포트 했으니, 버튼 함수를 호출 */}
    </div>
  );
}

export default App;
