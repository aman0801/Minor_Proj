import React from 'react'
import {useContext} from 'react'
import {MetaMaskContext} from '../../context/authContext'
import {ContractContext} from '../../context/contractContext'
const CastVote = () => {
  const {account} = useContext(MetaMaskContext)
  const {state} = useContext(ContractContext)
  console.log(state)
  return (
    <div>
      <h1>CastVote</h1>
      <form>
        {/* <label> */}
      </form>
    </div>
  )
}

export default CastVote;