import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { UserOutlined } from "@ant-design/icons";

const NavBarWrapper = styled.nav`
  background-color: lightgreen;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavLink = styled.li`
  margin-right: 20px;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

const LayoutNavigation = (): JSX.Element => {
  const router = useRouter();

  const onClickNavigation = (path: string): void => {
    void router.push(path);
  };

  return (
    <NavBarWrapper>
      <Logo onClick={() => onClickNavigation("/")}>Logo</Logo>
      <NavLinks>
        <NavLink onClick={() => onClickNavigation("/queryroom")}>
          질문방
        </NavLink>
        <NavLink onClick={() => onClickNavigation("/blog")}>지식 공유</NavLink>
        <UserOutlined onClick={() => onClickNavigation("/login")}>
          login
        </UserOutlined>
      </NavLinks>
    </NavBarWrapper>
  );
};

export default LayoutNavigation;
