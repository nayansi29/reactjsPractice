import React from "react";
import { useLocation } from "react-router-dom";
const Logout = () => {
  const location = useLocation();
  return (
    <>
      <h1>Logout Page</h1>
      <h2>{location.state.name}</h2>
    </>
  );
};

export default Logout;
