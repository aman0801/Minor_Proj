import React from 'react'
import './Home.css'
const Home = () => {
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

  .login{
    align-items: center;
}
.login h2{
    font-size: 2rem;
    font-weight: 600;
    color: #3f51b5;
    text-align: center;
    margin: 20px;
}
.login .form{
    border: solid 1px #000;
    text-align: center;
    display: grid;
    width: 100%;
    max-width: 500px;
    padding: 15px;
    margin: auto;
    min-height: 200px;
    
}
.login .form input{
    margin: 10px auto;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #f5f5f5;
    font-size: 1.2rem;
    width: 100%;
    max-width: 400px;
}
.login .form input:focus{
    outline: none;
    background-color: #e0e0e0;
}
.login .form label{
    font-size: 1.5rem;
    font-weight: 600;
    color: #3f51b5;
}
.login .form .submit-button{
    margin: auto;
    max-width: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #3f51b5;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
}
.login .form .submit-button:hover{
    background-color: #303f9f;
}

}

export default Home