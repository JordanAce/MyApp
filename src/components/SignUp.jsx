import React, { useState } from "react";
import axios from 'axios';

function SignUp({ switchComponent }) {

  const [values, setValues] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
    email: ""
  });

  const [submitted, setSubmitted] = useState(false);

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

  const handleConfirmPasswordChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      confirmPassword: e.target.value,
    }));
  };

  const handleEmailChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      email: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    await axios.post('/appUsers', {
      userName: values.userName,
      password: values.password,
      email: values.email
    }).then((response) => {
      console.log('Axios call made', response);
    }).catch((error) => {
      console.log('Error in Post function', error)
    })
  }

  return (
    <div className="box">
      <div className="centered fixed">
        <div className="inputs">
        <p className="login">Sign Up</p>
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
              {" "}
              Password:
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
              {" "}
              Confirm Password:
              <input
                id="confirmPassword"
                className="form-field"
                placeholder="Password"
                type="text"
                name="confirmPassword"
                required
                value={values.confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </label>
            <br></br>
            <label>
              {" "}
              E-Mail Address:
              <input
                id="email"
                className="form-field"
                placeholder="Email"
                type="text"
                name="email"
                required
                value={values.email}
                onChange={handleEmailChange}
              />
            </label>
            <br></br>
            <input type="submit" value="Submit" />
          </form>
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

export default SignUp;
