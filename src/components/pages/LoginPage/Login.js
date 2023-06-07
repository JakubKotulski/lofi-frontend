import { useForm } from "react-hook-form";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../../../config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginOptions = {
    email: {
      required: "Email is required",
      type: "email",
    },
    password: {
      required: "Password is required",
    },
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getEmail = (e) => setEmail(e.target.value);
  const getPassword = (e) => setPassword(e.target.value);

  const signUp = () => {
    axios({
      method: "POST",
      url: `${backendUrl}/user/login`,
      data: {
        email: email,
        password: password,
      },
    }).then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      navigate("/main");
      window.location.reload();
    });
  };

  return (
    <div className="custom-container">
      <Form className="custom-form" autoComplete="off" onSubmit={handleSubmit((data) => {})}>
        <h3 className="form-header">Sign in</h3>
        <FloatingLabel onChange={getEmail} controlId="floatingInput" label="Email address" className="mb-3">
          <Form.Control type="email" placeholder="email" {...register("email", loginOptions.email)} />
          <small className="text-error">{errors.email && errors.email.message}</small>
        </FloatingLabel>
        <FloatingLabel onChange={getPassword} controlId="floatingPassword" label="Password" className="mb-3">
          <Form.Control type="password" placeholder="Password" {...register("password", loginOptions.password)} />
          <small className="text-error">{errors.password && errors.password.message}</small>
        </FloatingLabel>
        <Form.Group className="submit-center submit-group" controlId="formGroupSubmit">
          <Button type="submit" className="custom-button neon-border" onClick={signUp}>
            <span className="neon-button-text">Sign in</span>
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
