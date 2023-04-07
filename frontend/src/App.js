import './App.css';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import Navbar from './components/navbar';
import Login from './pages/login/Login'
import Metamask from './pages/metamask/MetaMask'
import SignUp from './pages/signup/SignUp'
import Voter from './pages/voter/Voter'
import ChairMan from './pages/chairman/ChairMan'
import {useContext} from 'react'
import {MetaMaskContext} from './context/authContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/home';
function App() {
  const {account} = useContext(MetaMaskContext)
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={account===''?<Navigate to='metamask'/>:<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="metamask" element={<Metamask/>}/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="voter" element={account===''?<Navigate to='/metamask'/>:<Voter/>}/>
          <Route path="chairman" element={account===''?<Navigate to='/metamask'/>:<ChairMan/>}/>
        </Routes>
      </BrowserRouter>       
    </div>
  );
}

export default App;
