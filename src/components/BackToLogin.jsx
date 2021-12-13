import React, {useState, useReducer} from 'react';
import reducer from '../app.js'

function BackToLogin () {

  const [state, dispatch] = useReducer(reducer, data)
  const handleBackToLoginClick = (e) => {
    console.log('BACK TO LOGIN CLICKED');
  }
  return (
    <div>
      <button className = "button-solid" onClick = {handleBackToLoginClick}>Back to Login</button>
    </div>
  )
}

export default BackToLogin;