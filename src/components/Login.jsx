import React, {useState, useEffect} from 'react';
import Credentials from './Credentials.jsx';


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
       </div>
      </div>

    )
}
export default Login;