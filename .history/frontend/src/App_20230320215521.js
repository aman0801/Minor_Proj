import './App.css';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import Login from './pages/login/Login'
import Metamask from './pages/metamask/MetaMask'
import SignUp from './pages/signup/SignUp'
import Voter from './pages/voter/Voter'
import ChairMan from './pages/chairman/ChairMan'
import {ethers} from 'ethers'
import voting from "./contracts/voting.json"
import { useEffect, useState } from 'react';
function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState('');
  useEffect(() => {}
    , []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<home>home</home>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="metamask" element={<Metamask/>}/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="voter" element={<Voter/>}/>
          <Route path="chairman" element={<ChairMan/>}/>
        </Routes>
      </BrowserRouter>       
    </div>
  );
}

export default App;
