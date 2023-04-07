import { useEffect,useState } from 'react';
import './ViewVote.css';
import {useContext} from 'react'
import {MetaMaskContext} from '../../context/authContext'
import {ContractContext} from '../../context/contractContext'
export default function ViewVote() {
    const {account} = useContext(MetaMaskContext)
    const {state} = useContext(ContractContext)
    const [candidate1, setCandidate1] = useState('Narendra Modi')
    const [candidate2, setCandidate2] = useState('Arvinda Kejriwal')
    const [candidate1Votes, setCandidate1Votes] = useState(0)
    const [candidate2Votes, setCandidate2Votes] = useState(0)
    useEffect(
        () => {
           
            const {contract} = state;
            const getVotes = async () => {
                const votes1 = await contract.getVotes(candidate1);
                const votes2 = await contract.getVotes(candidate2);
                setCandidate1Votes(votes1.toString())
                setCandidate2Votes(votes2.toString())
            }
            getVotes()
        },
        [account,state])

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