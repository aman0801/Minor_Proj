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
            // const {contract} = state;
            // const fetchCandidate1 = async () => {
            //     const candidate1 = await contract.candidates1
            //     console.log(candidate1)
            //     setCandidate1(candidate1)
            // }
            // const fetchCandidate2 = async () => {
            //     const candidate2 = await contract.candidates2
            //     setCandidate2(candidate2.name)
            // }
            // fetchCandidate1()
            // fetchCandidate2()
            // const fetchVotes = async () => {
            //     const votes = await contract.totalVotes()
            //     console.log(votes)
            // }
            // fetchVotes()
            const {contract} = state;
            console.log(contract)
            function fetchVotes(name){
                const vote = contract.getVotes(name)
                return vote
            }
            console.log(fetchVotes('Manisha'))
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