import React, { useState } from "react";

function ForgotPassword({ switchComponent }) {
  const [values, setValues] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const handleUserNameChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      userName: e.target.value,
    }));
  };

  const handlePasswordChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      password: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="box">
      <div className="centered fixed">
        <div className="inputs">
          <div>
          <p className="login">Reset Password</p>
          <form className="credentials" onSubmit={handleSubmit}>
            <label>
              {" "}
              Username:
              <input
                id="username"
                className="form-field"
                placeholder="Username"
                type="text"
                name="username"
                required
                value={values.userName}
                onChange={handleUserNameChange}
              />
            </label>
            <br></br>
            <label>
              New Password:
              <input
                id="password"
                className="form-field"
                placeholder="Password"
                type="text"
                name="password"
                required
                value={values.password}
                onChange={handlePasswordChange}
              />
            </label>
            <br></br>
            <label>
              Confirm Password:
              <input
                id="ConfirmPassword"
                className="form-field"
                placeholder="Password"
                type="text"
                name="confirmPassword"
                required
                value={values.confirmPassword}
                onChange={handlePasswordChange}
              />
            </label>
            <br></br>
            <input type="submit" value="Submit" />
          </form>
          </div>
        </div>
        <div className="links">
          <div className="back-to-login">
            <button
              className="button-solid"
              id="login"
              onClick={switchComponent}
              name="login"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
