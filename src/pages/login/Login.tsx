import "./Login.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import loginSideLogo from "../../assets/kv-login.jpeg";
import KVlogo from "../../assets/kv-logo.png";

const Login = () => {
  return (
    <div className="login-page">
      <div className="side-banner">
        <img src={loginSideLogo} alt="side-banner" />
      </div>
      <div className="login-form">
        <div className="login-form-content">
          <img src={KVlogo} alt="kv-logo" className="kv-logo" />
          <div className="login-form__form">
            <Input
              inputId="login-username"
              inputType="text"
              labelName="Username"
              variant="login"
              inputPlaceholder=""
            />
            <Input
              inputId="login-password"
              inputType="password"
              labelName="Password"
              variant="login"
              inputPlaceholder=""
            ></Input>
          </div>
          <Button buttonName="Logging in" variant="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
