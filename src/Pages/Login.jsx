import React from "react";
import Navber from "../Components/Navber";
import Container from "../Components/Container";
import LoginForm from "../Components/Forms/LoginForm";

const Login = () => {
  return (
    <>
      <Container>
        <Navber></Navber>
        <div className="min-h-screen  flex justify-center items-center">
          <LoginForm></LoginForm>
        </div>
      </Container>
    </>
  );
};

export default Login;
