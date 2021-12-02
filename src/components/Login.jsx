import React, {useState, useEffect} from 'react';
import Credentials from './Credentials.jsx';
import ForgotPassword from './ForgotPassword.jsx';

function Login() {

  const [count, setCount] = useState(0);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [signUp, setSignUp] = useState (false);
  const [credentials, setCredentials] = useState(true);

  const handleForgotPasswordClick = () => {
    setForgotPassword(true);
    setCredentials(false);
  }

  const handleSignUpClick = () => {
    setSignUp(true);
    setCredentials(false);
  }

  useEffect(() => {
    console.log(`Refresh Count ${count}`)
  });


    return (
      <div className = "box">
        <div className = "centered fixed">
           <div className = "inputs">
             {forgotPassword && <ForgotPassword />}
             {signUp && <SignUp />}
             {credentials && <Credentials />}
           </div>
           {credentials &&
           <div className = "links">
            <div className = "forgot-password">
              <button className = "button-solid" onClick = {handleForgotPasswordClick}>Forgot Password?</button>
            </div>
            <div className = "signup">
            <button className = "button-solid" onClick = {handleSignUpClick}>Sign Up</button>
            </div>
           </div>
}
       </div>
      </div>

    )
}
export default Login;