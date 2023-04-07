import { useEffect,useState } from 'react';
import './ViewVote.css';
import {useContext} from 'react'
import {MetaMaskContext} from '../../context/authContext'
import {ContractContext} from '../../context/contractContext'
import Table from 'react-bootstrap/Table';
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
        <h1>Voting Table</h1>
            <Table striped bordered hover variant="dark">
      <thead>
        <tr>
            <th>#</th>
          <th>Candidate Name</th>
          <th>Votes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{candidate1}</td>
            <td>{candidate1Votes}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>{candidate2}</td>
            <td>{candidate2Votes}</td>
        </tr>
      </tbody>
    </Table>
        </div>
    )
}