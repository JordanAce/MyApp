import React, {useState} from 'react';
import ForgotPassword from './ForgotPassword.jsx';

function ForgotPasswordLink () {

  const [clicked, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  }

  return (
<div>
    <button className = "button-solid" onClick = {handleClick}>Forgot Password?</button>
    <div>
      {clicked && <ForgotPassword />}
    </div>
    </div>  )
}

export default ForgotPasswordLink;