import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) { //버튼 함수 argument는 최대 하나 반환값은 버튼 html
    return <button className={styles.btn}>{text}</button>;
}

Button.prototype = {
    text: PropTypes.string.isRequired,
};

export default Button; //파일 임포트를 가능하게 만들기 위해 사용