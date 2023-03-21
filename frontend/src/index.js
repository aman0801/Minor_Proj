import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {MetaMaskProvider} from './context/authContext';
import {ContractProvider} from './context/contractContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContractProvider>
    <MetaMaskProvider>
    <App />
    </MetaMaskProvider>
    </ContractProvider>
  </React.StrictMode>
);