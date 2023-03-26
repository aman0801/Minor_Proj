import { useEffect,useState } from 'react';
import './ViewVote.css';
import {useContext} from 'react'
import {MetaMaskContext} from '../../context/authContext'
import {ContractContext} from '../../context/contractContext'
import {ethers} from 'ethers'

export default function ViewVote() {
    const {account} = useContext(MetaMaskContext)
    const {state} = useContext(ContractContext)
    const [candidate1, setCandidate1] = useState('Manisha')
    const [candidate2, setCandidate2] = useState('Rishika')
    const [candidate1Votes, setCandidate1Votes] = useState(0)
    const [candidate2Votes, setCandidate2Votes] = useState(0)
    useEffect(
        () => {
           
            const {contract} = state;
            const getVotes = async () => {
                state.provider.getCode('0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512').then((res) => {
                    console.log(res)
                })
            }
            getVotes()
            // contract.getVotes('Manisha').then((res) => {
            //     console.log(res)
            // })
        },
        [])

    return (
        <div className='view-vote'>
            <h1>View Vote</h1>
            <div className='candidates'>
                <div className='names'>
                <h2>{candidate1}</h2>
                <h2>{candidate2}</h2>
                </div>
                <div className='votes'>
                <h2>{candidate1Votes}</h2>
                <h2>{candidate2Votes}</h2>
                </div>
            </div>
        </div>
    )
}