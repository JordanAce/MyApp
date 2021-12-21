import React, { useState } from "react";
const axios = require ('axios');

function Credentials() {
  const [values, setValues] = useState({
    userName: "",
    password: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    axios.post({
      method: 'post',
      url: '/appUsers',
      data: {
        userName: values.userName,
        password: values.password
      }
    }).catch((error) => {
      console.log('Error in Post function', error)
    })

  };

  return (
    <div>
      <p className="login">Login</p>
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
        <input type="submit" value="Submit" />
      </form>
      <div>
        {submitted && (
          <div className="success-message"> Success! You are Logged In!</div>
        )}
      </div>
    </div>
  );
}

export default Credentials;
