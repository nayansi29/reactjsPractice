import React from "react";
import { useLocation } from "react-router-dom";

const Login = () => {
  let location = useLocation();
  return (
    <>
      <h1> Login Page</h1>
      <h3>{location.state.user}</h3>
    </>
  );
};

export default Login;
