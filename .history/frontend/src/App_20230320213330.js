import './App.css';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import Login from './pages/login/Login'
import Metamask from './pages/metamask/MetaMask'
import SignUp from './pages/signup/SignUp'
import Voter from './pages/voter/Voter'
import ChairMan from './pages/chairman/ChairMan'
import {useContext} from 'react'
import {MetaMaskContext} from './context/authContext'
import {ethers} from 'ethers'
import {abi} from 
function App() {
  const {account} = useContext(MetaMaskContext)
  console.log(account)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={account===''?<Navigate to='/metamask'/>:<Navigate to='/voter'/>}/>
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
