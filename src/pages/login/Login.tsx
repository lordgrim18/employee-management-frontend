import "./Login.css";
import LoginInput from "../../components/LoginInput/LoginInput";
import Button from "../../components/Button/Button";

import loginSideLogo from "../../../public/assets/kv-login.jpeg";
import KVlogo from "../../../public/assets/kv-logo.png";
import { useEffect, useRef, useState, type SetStateAction } from "react";

import useMousePosition from "../../hooks/useMousePosition";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validUsername, setValidUsername] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const usernameRef = useRef<HTMLInputElement>(null);
  const mousePosition = useMousePosition();

  const updateUsername = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    if (username.length >= 10) {
      setValidUsername(true);
      return;
    }
    setValidUsername(false);
    return;
  }, [username]);

  useEffect(() => {
    localStorage.setItem("password", password);
  }, [password]);

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  const invalidMessage = validUsername ? (
    <p> </p>
  ) : (
    <p style={{ color: "red" }}>
      {" "}
      Invalid Username - Must be atleast 10 characters
    </p>
  );

  return (
    <div className="login-page">
      <div className="side-banner">
        <img src={loginSideLogo} alt="side-banner" />
      </div>
      <div className="login-form">
        <div className="login-form-content">
          <div>
            <h3>Mouse x - {mousePosition.x}</h3>
            <h3>Mouse y - {mousePosition.y}</h3>
          </div>
          <img src={KVlogo} alt="kv-logo" className="kv-logo" />
          <div className="login-form__form">
            <LoginInput
              id="login-username"
              label="Username"
              value={username}
              onChange={updateUsername}
              ref={usernameRef}
            />
            {invalidMessage}
            <LoginInput
              id="login-password"
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <LoginInput
              id="login-show-password"
              label="Show Password"
              type="checkbox"
              value={showPassword}
              onChange={() => setShowPassword((prev) => !prev)}
            />
          </div>
          <Button buttonName="Logging in" variant="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
