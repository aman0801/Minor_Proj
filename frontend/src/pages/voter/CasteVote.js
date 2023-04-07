import React from 'react'
import './CastVote.css'
import {useContext} from 'react'
import {MetaMaskContext} from '../../context/authContext'
import {ContractContext} from '../../context/contractContext'
import {ethers} from 'ethers'
import Button from 'react-bootstrap/esm/Button'
const CastVote = () => {
  const {account} = useContext(MetaMaskContext)
  const {state} = useContext(ContractContext)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const{contract} = state;
    const candidateName = e.target.candidateName.value
    console.log(contract, candidateName)
    //const amt = {value: ethers.utils.parseEther('0.001')}
    const vote = await contract.castVote(candidateName)
    await vote.wait()
    console.log("voted")
  }
  return (
    <div className='caste-vote'>
      <h1>CastVote</h1>
      <h2>Account: {account}</h2>
      <form onSubmit={(e)=>{handleSubmit(e)}} className='caste-form'>
        <label>Candidate Name</label>
        <input type="text" name="candidateName" />
        <Button variant="dark" size="lg" type="submit">Caste Vote</Button>
      </form>
    </div>
  )
}
export default CastVote;