import { useForm } from "react-hook-form";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {
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
  };

  return (
    <div className="custom-container">
      <Form className="custom-form" autoComplete="off" onSubmit={handleSubmit((data) => {})}>
        <h3 className="form-header">Sign in</h3>
        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
          <Form.Control type="email" placeholder="email" {...register("email", loginOptions.email)} />
          <small className="text-error">{errors.email && errors.email.message}</small>
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
          <Form.Control type="password" placeholder="Password" {...register("password", loginOptions.password)} />
          <small className="text-error">{errors.password && errors.password.message}</small>
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

export default Login;
