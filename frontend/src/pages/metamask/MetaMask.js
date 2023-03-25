import React from 'react';
import './MetaMask.css';
import { useContext } from 'react';
import { MetaMaskContext } from '../../context/authContext';
import { ContractContext } from '../../context/contractContext';
import {ethers} from 'ethers'
import abi from "../../contracts/voting.json"
import { useNavigate } from 'react-router-dom';
export default function MetaMask() {
    const { setAccount } = useContext(MetaMaskContext);
    const { setState } = useContext(ContractContext);
    const connectWallet = async () => {

         

        const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const contractABI = abi.abi;
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

