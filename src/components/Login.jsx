import React, {useState, useEffect} from 'react';
import Credentials from './Credentials.jsx';
import ForgotPasswordLink from './ForgotPasswordLink.jsx';
import SignUpLink from './SignUpLink.jsx'


function Login() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Refresh Count ${count}`)
  });


    return (
      <div className = "box">
        <div className = "centered fixed">
           <p className = "login">Login</p>
           <div className = "inputs">
           <Credentials />
           </div>
           <div className = "links">
           <div className = "forgot-password"><ForgotPasswordLink /></div>
           <div className = "signup"><SignUpLink /></div>
           </div>
       </div>
      </div>

    )
}
export default Login;