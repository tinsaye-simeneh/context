import React, { useState, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import { Container, Form, Button } from "react-bootstrap";

export default function Login() {
  const { username, setUsername, setIsLoggedIn } = useContext(LoginContext);

  return (
    <Container className="bg-dark my-5 pb-5">
      <h1 className="text-center text-white py-4">Login</h1>
      <form className="w-50 mx-auto">
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={() => setIsLoggedIn(true)}
          className="w-100 mt-5"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
