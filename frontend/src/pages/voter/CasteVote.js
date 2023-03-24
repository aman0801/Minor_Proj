import React from 'react'
import './CastVote.css'
import {useContext} from 'react'
import {MetaMaskContext} from '../../context/authContext'
import {ContractContext} from '../../context/contractContext'
const CastVote = () => {
  const {account} = useContext(MetaMaskContext)
  const {state} = useContext(ContractContext)
  console.log(state)
  const handleSubmit = (e) => {
    e.preventDefault()
    
  }
  return (
    <div className='caste-vote'>
      <h1>CastVote</h1>
      <h2>Account: {account}</h2>
      <form onSubmit={(e)=>{handleSubmit(e)}} className='caste-form'>
        <label>Candidate Name</label>
        <input type="text" name="candidateName" />
        <button type="submit">Cast Vote</button>
      </form>
    </div>
  )
}
export default CastVote;