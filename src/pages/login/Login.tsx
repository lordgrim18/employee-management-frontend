import React, { useEffect, useRef, useState, type SetStateAction } from "react";

import { useNavigate } from "react-router-dom";

import "./Login.css";
import useMousePosition from "../../hooks/useMousePosition";
import LoginInput from "../../components/LoginInput/LoginInput";
import Button from "../../components/Button/Button";
import loginSideLogo from "../../assets/kv-login.jpeg";
import KVlogo from "../../assets/kv-logo.png";
import { useLoginMutation } from "../../api-service/auth/login.api";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(localStorage.getItem("showPassword") === "true");
  const [error, setError] = useState({
    error: "",
    usernameError: "",
    passwordError: ""
  })
  const [isError, setIsError] = useState(true);

  const navigate = useNavigate()

  const usernameRef = useRef<HTMLInputElement>(null);
  const mousePosition = useMousePosition();

  useEffect(() => {
    if (username.length < 4 && username.length > 0) {
      setError((prevError) => ({
        ...prevError,
        usernameError: "Username should be atleast 4 characters long"
      }));
      return;
    }
    setError((prevError) => ({
      ...prevError,
      usernameError: ""
    }));
    return;
  }, [username]);

  useEffect(() => {
    if (password.length < 5 && password.length > 0) {
      setError((prevError) => ({
        ...prevError,
        passwordError: "Password should be atleast 5 characters long"
      }));
      return;
    }
    setError((prevError) => ({
      ...prevError,
      passwordError: ""
    }));
    return;
  }, [password]);

  useEffect(() => {
    setError((prevError) => ({
        ...prevError,
        error: ""
      }));
  }, [username, password])

  useEffect(() => {
    ( error.usernameError || error.passwordError || error.error) ? setIsError(true) : setIsError(false)
  })

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  const updateUsername = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setUsername(event.target.value);
  };

  const loginUser = async (e: React.FormEvent) => {
    e.preventDefault();
    login({ email: username, password: password })
    .unwrap()
    .then((response) => {
      localStorage.setItem("token", response.accessToken);
      setError((prevError) => ({
        ...prevError,
        error: ""
      }))
      navigate('/employees');
    }).catch((error) => {
      setError((prevError) => ({
        ...prevError,
        error: error.data.message
      }))
    });
  }

  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    return token ? true : false 
  };

  if (isLoggedIn()) {
    navigate("/employees")
  } else {

  return (
      <div className="login-page">
        <div className="side-banner">
          <img src={loginSideLogo} alt="side-banner" />
        </div>
        <div className="login-form">
          <form className="login-form-content" onSubmit={loginUser}>
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
                endAdornment={
                  <button
                    className="login--clear-button"
                    type="button"
                    disabled={username.length === 0}
                    onClick={() => setUsername("")}
                  >
                    Clear
                  </button>
                }
              />
              {error.usernameError && <span style={{ color: 'red', fontSize: '12px' }}>{error.usernameError}</span>}

              <LoginInput
                id="login-password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                endAdornment={
                  <button
                    className="login--clear-button"
                    type="button"
                    disabled={password.length === 0 }
                    onClick={() => setPassword("")}
                  >
                    Clear
                  </button>
                }
              />
              {error.passwordError && <span style={{ color: 'red', fontSize: '12px' }}>{error.passwordError}</span>}

              <LoginInput
                id="login-show-password"
                label="Show Password"
                type="checkbox"
                // {setShowPassword ? "checked" : }
                onChange={() => setShowPassword((prev) => {
                  localStorage.setItem("showPassword", String(!prev))
                  return !prev
                })}
                checked={showPassword}
                commonClass="form-element-checkbox"
                required={false}
              />
            </div>
            <Button type="submit" disabled={ isLoading || isError } buttonName="Log in" variant="login" />
            {error.error && <span style={{ color: 'red', fontSize: '12px' }}>{error.error}</span>}
          </form>
        </div>
      </div>
    );
  }
};

export default Login;
