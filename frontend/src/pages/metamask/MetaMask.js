import React from 'react';
import './MetaMask.css';
import { useContext } from 'react';
import { MetaMaskContext } from '../../context/authContext';
import {ethers} from 'ethers'
import voting from "../../contracts/voting.json"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function App() {
    const { account,setAccount } = useContext(MetaMaskContext);
    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null,
    });
    const connectWallet = async () => {
        const contractAddress = "0x9c01efbbe3c345331c3a5c111f68ef7a561a9512";
        const contractABI = voting.abi;
        try {
            const { ethereum } = window;

        if (ethereum) {
            const account = await ethereum.request({
            method: "eth_requestAccounts",
        });

        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setAccount(account);
        setState({ provider, signer, contract });
        navigate('/');
      } else {
        alert("Please install metamask");
      }
    } catch (error) {
      console.log(error);
    }
  }
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        connectWallet();
       
    }
  return (
    <div className="MetaMask">
        <button onClick={(e)=>{handleSubmit(e)}}>Connect Wallet</button>
    </div>
  );
}

export default App;
