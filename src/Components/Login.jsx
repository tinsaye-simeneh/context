import React, { useState, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import { Container, Form, Button } from "react-bootstrap";
import '../style/Login.css'

export default function Login() {
  const { username, setUsername, setIsLoggedIn } = useContext(LoginContext);

  return (
    <Container className="bg-dark my-5 pb-5">
      <h1 className="text-center text-white py-4">Login</h1>
      <form className="mx-auto">
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required/>
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
