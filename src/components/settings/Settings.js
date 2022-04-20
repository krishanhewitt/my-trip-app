import React from "react";
import useAuth from "../login/useAuth";
import { useParams, useNavigate } from "react-router-dom";

export default function Settings() {
  const { removeUserToken } = useAuth();
  const params = useParams();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    removeUserToken();
    navigate("/");
  };

  return (
    <div>
      <h1>Settings</h1>
      <p>Your user id is {params.userID}</p>
      <p>Click the button below to logout</p>
      <button type="button" onClick={logout}>
        Sign out
      </button>
    </div>
  );
}
