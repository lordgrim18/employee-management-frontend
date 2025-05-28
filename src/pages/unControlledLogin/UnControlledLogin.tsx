import "./UnControlledLogin.css";
import LoginInput from "../../components/NewLoginInput/NewLoginInput";
import { useRef, useEffect } from "react";
import kvLogo from "../../assets/kv-logo.png";
import kvLoginImg from "../../assets/kv-login.jpeg";
import Button from "../../components/NewButton/NewButton";

const UncontrolledLogin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const clearButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (usernameRef?.current) usernameRef.current.focus();
  }, []);

  const clearUsername = () => {
    if (!usernameRef.current) return;
    usernameRef.current.value = "";
    if (clearButtonRef.current) 
        clearButtonRef.current.disabled = true
  }

  const clearButtonChange = () => {
    if (clearButtonRef.current) {
        if (usernameRef.current && usernameRef.current.value.length > 0) {
            clearButtonRef.current.disabled = false;
            clearButtonRef.current.onclick = clearUsername;
        }
        else {
            clearButtonRef.current.disabled = true;
        }
    }
  }

  return (
    <div className="content">
      <div className="pattern-side">
        <div className="pattern" />
        <div className="circle-large">
          <div className="circle-inner">
            <img src={kvLoginImg} alt="KV Login" className="login-image" />
          </div>
        </div>
      </div>
      <div className="login-side">
        <div className="login-content">
          <img className="logo" src={kvLogo} alt="KV Logo" />
          <form /*onSubmit={handleRefSubmit} */>
            <LoginInput
              id="login-username-input"
              label="Username"
              ref={usernameRef}
              name="username"
              onChange={clearButtonChange}
              endAdornment={
                <button type="button" disabled={true} ref={clearButtonRef} onClick={clearUsername}> 
                    Clear
                </button>
              }
            />

            <LoginInput id="login-password-input" label="Password" />

            <Button type="submit" className="login-button">
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledLogin;