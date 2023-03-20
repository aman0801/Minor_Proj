import './MetaMask.css'
import {useContext} from 'react'
import {MetaMaskContext} from '../../context/authContext'
import { useNavigate } from 'react-router-dom'
export default function Metamask() {
    const navigate = useNavigate()
    const {account,setAccount} = useContext(MetaMaskContext)
    const metamask = ((e) => {
        e.preventDefault()
        alert('Metamask')
        setAccount('Metamask gay man')
        navigate('/')
    })
    return (
        <div className='MetaMask'>
        <h1>Metamask</h1>
        <button onClick={(e)=>{metamask(e)}}>Login</button>
        </div>
    )
}