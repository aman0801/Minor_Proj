import React from 'react'
import './Voter.css'
import {useContext} from 'react'
import CastVote from './CastVote'
import {MetaMaskContext} from '../../context/authContext'
export default function Voter() {
    const {account} = useContext(MetaMaskContext)
    return (
        <div>
        <h1>Voter</h1>
        <CastVote />
        </div>
    )
}
