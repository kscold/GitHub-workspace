// register
import { useRecoilState } from "recoil";
import { registerForm } from "../../src/components/units/register/index";
import { isLoginVisibleState } from "../../src/components/commons/recoilState";

const RegisterPage = (): JSX.Element => {
  const [isLoginVisible, setIsLoginVisible] =
    useRecoilState(isLoginVisibleState);
  setIsLoginVisible(false);
  return registerForm(); // Call the registerForm function to render the JSX content
};

export default RegisterPage;
