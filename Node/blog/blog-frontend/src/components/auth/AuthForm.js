// 회원가입 또는 로그인 폼을 보여 줌
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

// 회원가입 또는 로그인 폼을 보여 줍니다.

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

// 스타일링된 input

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    // 자기 자신
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    // 자기 자신 사이
    margin-top: 1rem;
  }
`;

const ButtonWithMarginTop = styled(Button)`
  // 추가적인 옵션을 정의하기 위해 새로운 컴포넌트 이름으로 정의함
  margin-top: 1rem;
`;

// 폼 하단에 로그인 혹은 회원가입 링크를 보여 줌

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
        <StyledInput
          autoComplete="username" // 자동으로 백엔드로 넘어가게 해주는 옵션?
          name="username"
          placeholder="아이디"
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호"
            type="password"
          />
        )}
        <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '1rem' }}>
          {/* props&&css로 추가 설정을 함 */}
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
