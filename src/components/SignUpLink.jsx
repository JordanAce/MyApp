import React, {useState} from 'react';
import SignUp from './SignUp.jsx';

function SignUpLink () {

  const [clicked, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  }

  return (
    <div>
    <button className = "button-solid" onClick = {handleClick}>Sign Up</button>
    <div>
      {clicked && <SignUp />}
    </div>
    </div>
  )
}

export default SignUpLink;