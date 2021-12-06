import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login.jsx'
import ForgotPassword from './components/ForgotPassword.jsx';
import SignUp from './components/SignUp.jsx'
import '../public/styles.css'

const reducer = (state, action) => {
  switch(action.type) {
    case "RENDER_LOGIN":
      return {
        login: true,
        forgotpassword: false,
        signup: false
      }
    case "RENDER_FORGOT_PASSWORD":
      return {
        login: false,
        forgotpassword: true,
        signup: false
      }
    case "RENDER_SIGNUP":
      return {
        login: false,
        forgotpassword: false,
        signup: true
      }
  }
}

const App = () => {
  const initialState = {
    login: false,
    forgotpassword: false,
    signup: true
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1 className = "title">My App</h1>
      {state.login && <Login />}
      {state.forgotpassword && <ForgotPassword />}
      {state.signup && <SignUp />}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));