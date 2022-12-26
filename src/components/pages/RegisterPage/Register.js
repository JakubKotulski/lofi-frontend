import { useForm } from "react-hook-form";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import "./Register.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
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
    birthday: {
      required: "This field is required",
    },
  };

  return (
    <div className="custom-container">
      <Form className="custom-form" autoComplete="off" onSubmit={handleSubmit((data) => {})}>
        <h3 className="form-header">Sign up</h3>
        <div className="divided-bar">
          <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
            <Form.Control type="texr" placeholder="name" {...register("name", loginOptions.name)} />
            <small className="text-error">{errors.name && errors.name.message}</small>
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Surname" className="mb-3">
            <Form.Control type="text" placeholder="surname" {...register("surname", loginOptions.surname)} />
            <small className="text-error">{errors.surname && errors.surname.message}</small>
          </FloatingLabel>
        </div>
        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
          <Form.Control type="email" placeholder="email" {...register("email", loginOptions.email)} />
          <small className="text-error">{errors.email && errors.email.message}</small>
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
          <Form.Control type="password" placeholder="Password" {...register("password", loginOptions.password)} />
          <small className="text-error">{errors.password && errors.password.message}</small>
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Birthday" className="mb-3">
          <Form.Control type="date" placeholder="Birthday" {...register("birthday", loginOptions.birthday)} />
          <small className="text-error">{errors.birthday && errors.birthday.message}</small>
        </FloatingLabel>
        <Form.Group className="submit-center submit-group" controlId="formGroupSubmit">
          <Button type="submit" className="custom-button neon-border">
            <span className="neon-button-text">Sign in</span>
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Register;
