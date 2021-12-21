import React, { useState, useEffect } from "react";
import Credentials from "./Credentials.jsx";

function Login({ switchComponent }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    console.log(`Refresh Count ${count}`);
  }, []);

  return (
    <div className="box">
      <div className="centered fixed">
        <div className="inputs">
          <Credentials />
        </div>
        <div className="links">
          <div className="forgot-password">
            <button
              className="button-solid"
              id="password"
              onClick={switchComponent}
              name="forgotPassword"
            >
              Forgot Password?
            </button>
          </div>
          <div className="signup">
            <button
              className="button-solid"
              id="signup"
              onClick={switchComponent}
              name="signup"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
