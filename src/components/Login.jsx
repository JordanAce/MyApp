import React, {useState, useEffect} from 'react';
import BackToLogin from './BackToLogin.jsx';
import Credentials from './Credentials.jsx';
import ForgotPassword from './ForgotPassword.jsx';
import SignUp from './SignUp.jsx';

function Login() {

  const [count, setCount] = useState(0);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [signUp, setSignUp] = useState (false);
  const [credentials, setCredentials] = useState(true);


  //Change State if Forgot Password clicked
  const handleForgotPasswordClick = () => {
    setForgotPassword(true);
    setCredentials(false);
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
              {/* Conditionally render correct component */}
             {forgotPassword && <ForgotPassword />}
             {signUp && <SignUp />}
             {credentials && <Credentials />}
           </div>
           {/* Only Render Correct Bottom Links */}

           {/* In Credentials Screen */}
           <div className = "links">
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
              {forgotPassword && <BackToLogin />}
              {signUp && <BackToLogin />}
          </div>
       </div>
      </div>
    )
}
export default Login;