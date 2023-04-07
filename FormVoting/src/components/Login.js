import React from 'react'
import './Login.css'
const Login = () => {
    const handleSubmit= (e)=>{

    }
  return (
    <div className="login">
        <h2>Login to see total votes</h2>
        <form className='form' onSubmit={(e)=>{handleSubmit(e)}}>
            <label htmlFor="ID">BOOTH ID</label>
            <input type="ID" name="ID" placeholder="Enter Booth ID" required/>
            <label htmlFor="ID">BOOTH Incharge ID </label>
            <input type="ID" name="ID" placeholder="Enter Booth Incharge ID" required/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter your password" required/>
            <button type="submit" className="submit-button">Login</button>
        </form>
        </div>
  )
}

export default Login