import React, {useState} from 'react';
import Login from './Login.jsx'

function BackToLogin () {

  const [loginClicked, setLoginClicked] = useState (false);

  const handleBackToLoginClick = () => {
    setLoginClicked(true);
  }
  return (
    <div>
      <button className = "button-solid" onClick = {handleBackToLoginClick}>Back to Login</button>
      {loginClicked && <Login />}
    </div>
  )
}

export default BackToLogin;