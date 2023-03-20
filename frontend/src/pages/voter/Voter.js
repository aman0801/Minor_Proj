import React from 'react'
import './Voter.css'
import {useContext} from 'react'
import {MetaMaskContext} from '../../context/authContext'
export default function Voter() {
    const {account,setAccount} = useContext(MetaMaskContext)
    return (
        <div>
        <h1>Voter</h1>
        <h3>{account}</h3>
        </div>
    )
}
