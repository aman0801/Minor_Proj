import React from 'react';
import './MetaMask.css';
import { useContext } from 'react';
import { MetaMaskContext } from '../../context/authContext';
import { ContractContext } from '../../context/contractContext';
import useDocument from '../../hooks/useDocument';
import { ethers } from 'ethers'
import abi from "../../contracts/voting.json"
import {useAuthContext} from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import {useLogout} from '../../hooks/useLogout';
export default function MetaMask() {
  const {logout,ispending,error} = useLogout();
  const { user } = useAuthContext();
  const { setAccount } = useContext(MetaMaskContext);
  const { setState } = useContext(ContractContext);
  const { document } = useDocument('users', user.uid);
  const connectWallet = async () => {
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
      const contract = new ethers.Contract("0x5f57daf5508DD7886BAcDbC888B81466B307B177", abi.abi, signer);
      setAccount(account[0]);
      setState({ provider, signer, contract });
      const expectedmetaMaskAccount = document.metamaskId.toLowerCase();
      if (account[0] !== expectedmetaMaskAccount) {
        alert("Please connect to the correct MetaMask account");
        logout();
      }
      navigate('/');
    }
  }
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    connectWallet();

  }
  return (
    <div className="MetaMask">
      <button onClick={(e) => { handleSubmit(e) }}>Connect Wallet</button>
    </div>
  );
}

