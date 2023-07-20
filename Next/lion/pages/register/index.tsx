// register
import React from "react";
import AuthTemplate from "../../src/components/units/login/AuthTemplate";
import AuthForm from "../../src/components/units/login/AuthForm";

const RegisterPage = (): JSX.Element => {
  return (
    <AuthTemplate>
      <AuthForm type="register" />
    </AuthTemplate>
  );
};

export default RegisterPage;
