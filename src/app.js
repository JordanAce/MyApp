import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login.jsx'
import '../public/styles.css'


function App () {
  return (
    <div>
      <h1 className = "title">My App</h1>
      <Login />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));