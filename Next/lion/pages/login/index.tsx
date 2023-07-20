// login
import React from "react";
import AuthTemplate from "../../src/components/units/login/AuthTemplate";
import AuthForm from "../../src/components/units/login/AuthForm";

const LoginPage = (): JSX.Element => {
  return (
    <AuthTemplate>
      <AuthForm type="login" />
    </AuthTemplate>
  );
};

export default LoginPage;
