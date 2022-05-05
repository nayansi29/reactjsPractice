import React from "react";
import { useNavigate } from "react-router-dom";

const Dasboard = () => {
  let navigate = useNavigate();
  let data = {
    name: "sonam",
  };
  return (
    <>
      <h1>Dasboard</h1>
      <button
        onClick={() => {
          navigate("/logout", { state: data });
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Dasboard;
