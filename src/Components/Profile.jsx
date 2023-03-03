import React, { useState, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import { Container, Button } from "react-bootstrap";

export default function Profile() {
  const { username, setIsLoggedIn } = useContext(LoginContext);
  return (
    <Container className="bg-dark my-5 pt-5">
      <h1 className="text-center text-white my-5">Welcome {username}</h1>
        <div className="d-flex justify-content-center w-25 mx-auto pb-5">
      <Button onClick={() => setIsLoggedIn(false)} className="mx-auto w-100 text-center">Logout</Button>
        </div>
    </Container>
  );
}
