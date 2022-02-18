import React from "react";
import { Container } from "react-bootstrap";
import { secrets } from "./.secrets.js";

const AUTH_URL = secrets.AUTH_URL_LINK;

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login with spotify
      </a>
    </Container>
  );
}
