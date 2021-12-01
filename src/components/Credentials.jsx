import React, {useState} from 'react';

function Credentials () {

  const [values, setValues] = useState({
    userName: '',
    password: ''
  });

  const handleUserNameChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      userName: e.target.value,
    }));
  }

  const handlePasswordChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      password : e.target.value
    }));
  }

  const handleSubmit = () => {
    alert('working')
  }


  return (
    <form className = "credentials" onSubmit = {handleSubmit}>
      <label > Username:
      <input
        id = "username"
        className = "form-field"
        placeholder = "Username"
        type = "text"
        name = "username"
        value = {values.userName}
        onChange ={handleUserNameChange} />
      </label><br></br>
      <label> Password:
      <input
        id = "password"
        className = "form-field"
        placeholder = "Password"
        type = "text"
        name = "password"
        value = {values.password}
        onChange = {handlePasswordChange} />
      </label><br></br>
      <input type ="Submit" value="Login" />
    </form>
  )
}

export default Credentials;