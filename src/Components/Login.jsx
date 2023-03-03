import React, { useState, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

export default function Login() {
const {username, setUsername, setIsLoggedIn} = useContext(LoginContext)

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input type="password" placeholder="Password" />
      <button onClick={() => setIsLoggedIn(true)}>
        Login
      </button>
    </div>
  );
}
