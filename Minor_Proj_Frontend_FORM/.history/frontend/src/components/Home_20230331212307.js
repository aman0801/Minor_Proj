import React from 'react'
import './Home.css'
const Home = () => {
  const handleSubmit= (e)=>{

  }
  // return (
  //   <div>
  //     <h1>Final Votes</h1>
  //     <p>Here are the final votes for the 202x election</p>
  //     <div className='inputs'>
  //     <input type="text" placeholder="Give you Booth ID" />
  //     <input type="text" placeholder="Giver your Booth Head ID" />
  //     <input type="password" style={{fontFamily: "Arial"}} placeholder="Give password" />
  //     <button>Submit</button>
  //     </div>
  //   </div>
  // )

  return (
    <div className="login">
    <h2>Final Votes </h2>
    <p>Here are the final votes for the 202x election</p>
    <form className='form' onSubmit={(e)=>{handleSubmit(e)}}>
        <label htmlFor="email">Booth ID</label>
        <input type="email" name="email" placeholder="Give you Booth ID" required/>
        <label htmlFor="email">Booth Incharge ID</label>
        <input type="email" name="email" placeholder="Giver your Booth incharge ID" required/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Enter your password" required/>
        <button type="submit" className="submit-button">Login</button>
    </form>
    </div>
)
}

export default Home