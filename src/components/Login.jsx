import React, {useState, useEffect, useReducer} from 'react';
import Credentials from './Credentials.jsx';
import reducer from '../app.js';
function Login() {

  const [state, dispatch] = useReducer(reducer, data)
  const [count, setCount] = useState(0);



  //Change State if Forgot Password clicked
  const handleForgotPasswordClick = () => {
    dispatch({type: "RENDER_FORGOT_PASSWORD"})
  }

  //Change State if Sign Up clicked
  const handleSignUpClick = () => {
    setSignUp(true);
    setCredentials(false);
  }

  useEffect(() => {
    setCount(count + 1)
    console.log(`Refresh Count ${count}`)
  },[]);


    return (
      <div className = "box">
        <div className = "centered fixed">
           <div className = "inputs">
             <Credentials />
           </div>
           <div className = "links">
              <div className = "forgot-password">
                <button className = "button-solid" id = "password" onClick = {() => {
                  dispatch({ type: "RENDER_FORGOT_PASSWORD"});
                }}>Forgot Password?</button>
              </div>
              <div className = "signup">
                <button className = "button-solid" id = "signup" onClick = {handleSignUpClick}>Sign Up</button>
              </div>
            </div>
          </div>
       </div>
    )
}
export default Login;