import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  FormFeedback,
} from "reactstrap";
import { useEffect, useState } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordInValid, setPasswordStatus] = useState(false);

  const login = () => {
    if (!validator.isEmail(email)) {
      alert("Invalid email");
      return;
    }

    if (!password || password.length < 4) {
      alert("Invalid password");
      return;
    }

    navigate("/countries");
  };

  useEffect(() => {
    console.log(`Is password valid: ${password.length >= 4}`);
    if (password) {
      if (password.length >= 4) {
        setPasswordStatus(false);
      } else {
        setPasswordStatus(true);
      }
    }
  }, [password]);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          height: "400px",
          width: "300px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        <h1>Countries.io</h1>
        <h4
          style={{
            marginTop: "5px",
            marginBottom: "5px",
          }}
        >
          Login
        </h4>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="user@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              invalid={isPasswordInValid}
            />
            <FormText>Forget Password?</FormText>
            {isPasswordInValid && <FormFeedback>Invaid Password</FormFeedback>}
          </FormGroup>
          <Button
            outline
            color="primary"
            style={{ marginTop: "5px" }}
            block
            onClick={login}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
