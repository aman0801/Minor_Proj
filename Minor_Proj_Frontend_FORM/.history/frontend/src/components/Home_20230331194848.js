import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Final Votes</h1>
      <p>Here are the final votes for the 202x election</p>
      <div className='input'>
      <input type="text" placeholder="Give you Booth ID" />
      <input type="text" placeholder="Giver your Booth Head ID" />
      <input type="password" style={{fontFamily: "Arial"}} placeholder="Give password" />
      <button>Submit</button>
      </div>
    </div>
  )
}

export default Home