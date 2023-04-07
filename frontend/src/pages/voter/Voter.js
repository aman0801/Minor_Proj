import React from 'react'
import './Voter.css'
import {useContext,useState} from 'react'
import CastVote from './CasteVote.js'
import ViewVote from './ViewVote.js'
import {MetaMaskContext} from '../../context/authContext'
import {ContractContext} from '../../context/contractContext'
export default function Voter() {
    const {account} = useContext(MetaMaskContext)
    const {state} = useContext(ContractContext)
    const [currentView,setCurrentView] = useState('castVote')
    const switchView = (view) => {

        if(view === 'castVote'){
            setCurrentView('castVote')
        }
        else if(view === 'viewVote'){
            setCurrentView('viewVote')
        }
    }
    return (
        <div className='voter'>
            <h1>voter</h1>
        </div>
    )
}
