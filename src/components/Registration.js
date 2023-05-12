import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Swal from "sweetalert2";

function Registration() {
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [passwordd, setPasswordd] = useState("");

  function clearInput() {
    setUserName("");
    setEmailAddress("");
    setPasswordd("");
  }
  async function UserPost() {
    console.log(userName, emailAddress, passwordd);
    const userDetails = {
      username: userName,
      email: emailAddress,
      password: passwordd,
    };
    //  console.log(userDetails);
    const response = await axios
      .post("https://bms-backend-be5t.onrender.com/user-register", userDetails)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Submitted!!",
        });
        clearInput();
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "server error!!",
        })
      );
  }

  return (
    <div style={{ backgroundColor: "#121212", color: "white" }}>
      <Container>
        <Form style={{ padding: "7%", marginLeft: "30%" }}>
          <Form.Group className="w-50">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter username"
            />
          </Form.Group>

          <Form.Group className="w-50" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="w-50" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={passwordd}
              onChange={(e) => setPasswordd(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" onClick={UserPost}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Registration;
