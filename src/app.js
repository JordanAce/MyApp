import React, { useState } from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import SignUp from "./components/SignUp.jsx";
import "../public/styles.css";
import "regenerator-runtime/runtime";

const App = () => {
  const [state, setState] = useState({
    login: true,
    forgotPassword: false,
    signup: false,
  });

  function switchComponent(e) {
    let name = e.target.getAttribute("name");

    if (name === "login") {
      setState((state) => ({
        login: true,
        forgotPassword: false,
        signup: false,
      }));
    }

    if (name === "forgotPassword") {
      setState((state) => ({
        login: false,
        forgotPassword: true,
        signup: false,
      }));
    }

    if (name === "signup") {
      setState((state) => ({
        login: false,
        forgotPassword: false,
        signup: true,
      }));
    }
  }

  return (
    <div>
      <h1 className="title">My App</h1>
      {state.login && <Login switchComponent={switchComponent} />}
      {state.forgotPassword && (
        <ForgotPassword switchComponent={switchComponent} />
      )}
      {state.signup && <SignUp switchComponent={switchComponent} />}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
