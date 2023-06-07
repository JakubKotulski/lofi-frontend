import { useForm } from "react-hook-form";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../../../config";
import ModalAlert from "../../ModalAlert/ModalAlert";

const Register = () => {
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
    name: {
      required: "Name is required",
    },
    surname: {
      required: "Surname is required",
    },
  };

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const getName = (e) => setName(e.target.value);
  const getSurname = (e) => setSurname(e.target.value);
  const getEmail = (e) => setEmail(e.target.value);
  const getPassword = (e) => setPassword(e.target.value);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const clearMessage = () => setMessage("");

  const signUp = () => {
    axios({
      method: `POST`,
      url: `${backendUrl}/user`,
      data: {
        name: name,
        surname: surname,
        email: email,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        setMessage(err.response.data);
        handleShow(true);
        setName("");
      });
  };

  return (
    <div className="custom-container">
      <Form
        className="custom-form"
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          signUp();
        }}
      >
        <h3 className="form-header">Sign up</h3>
        <div className="divided-bar">
          <FloatingLabel onChange={getName} controlId="floatingName" label="Name" className="mb-3">
            <Form.Control type="texr" placeholder="name" {...register("name", loginOptions.name)} />
            <small className="text-error">{errors.name && errors.name.message}</small>
          </FloatingLabel>
          <FloatingLabel onChange={getSurname} controlId="floatingSurname" label="Surname" className="mb-3">
            <Form.Control type="text" placeholder="surname" {...register("surname", loginOptions.surname)} />
            <small className="text-error">{errors.surname && errors.surname.message}</small>
          </FloatingLabel>
        </div>
        <FloatingLabel onChange={getEmail} controlId="floatingEmail" label="Email address" className="mb-3">
          <Form.Control type="email" placeholder="email" {...register("email", loginOptions.email)} />
          <small className="text-error">{errors.email && errors.email.message}</small>
        </FloatingLabel>
        <FloatingLabel onChange={getPassword} controlId="floatingPassword" label="Password" className="mb-3">
          <Form.Control type="password" placeholder="Password" {...register("password", loginOptions.password)} />
          <small className="text-error">{errors.password && errors.password.message}</small>
        </FloatingLabel>
        <Form.Group className="submit-center submit-group" controlId="formGroupSubmit">
          <Button type="submit" className="custom-button neon-border">
            <span className="neon-button-text">Sign up</span>
          </Button>
        </Form.Group>
      </Form>
      <ModalAlert handleClose={handleClose} show={show} message={message} />
    </div>
  );
};

export default Register;
