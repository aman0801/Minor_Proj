import React from 'react'
import './CastVote.css'
import {useContext,useState,useEffect} from 'react'
import {MetaMaskContext} from '../../context/authContext'
import {ContractContext} from '../../context/contractContext'
import Button from 'react-bootstrap/esm/Button'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const CastVote = () => {
  const {account} = useContext(MetaMaskContext)
  const {state} = useContext(ContractContext)
  const [selected,setselected] = useState("Please select an option")
  const [options,setoptions]=useState([])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const{contract} = state;
    const candidateName = selected;
    console.log(candidateName)
    if(candidateName==="Please select an option"){
      alert("Please select an option")
      return
    }
    const vote = await contract.castVote(candidateName);
    await vote.wait()
    console.log("voted")
  }
  useEffect(()=>{
    setoptions(['Narendra Modi','Arvinda Kejriwal'])
  },[])
  const defaultOption = "Please select an option";
  return (
    <div className='caste-vote'>
      <h1>CastVote</h1>
      <h2>Account: {account}</h2>
      <form onSubmit={(e)=>{handleSubmit(e)}} className='caste-form'>
        <label>Candidate Name</label>
        {options.length>0&&<Dropdown options={options} onChange={(e)=>{setselected(e.value)}} value={defaultOption} placeholder="Select an option" />}
        <Button variant="dark" size="lg" type="submit">Caste Vote</Button>
      </form>
    </div>
  )
}
export default CastVote;