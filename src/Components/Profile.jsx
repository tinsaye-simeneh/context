import React, { useState, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

export default function Profile() {
  const { username, setIsLoggedIn } =
    useContext(LoginContext);
  return (
    <div>
      <h1>Welcome {username}</h1>
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    </div>
  );
}
