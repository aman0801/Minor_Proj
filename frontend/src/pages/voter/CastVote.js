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
      <h1>CastVot</h1>

    </div>
  )
}

export default CastVote;