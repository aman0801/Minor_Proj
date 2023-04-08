import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {MetaMaskProvider} from './context/authContext';
import {ContractProvider} from './context/contractContext';
import { AuthContextProvider } from './context/firebaseContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <ContractProvider>
    <MetaMaskProvider>
    <App />
    </MetaMaskProvider>
    </ContractProvider>
    </AuthContextProvider>
  </React.StrictMode>
);