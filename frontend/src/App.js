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
import { useAuthContext } from './hooks/useAuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/home';
import ViewVoter from './pages/voter/ViewVote';
import CasteVoter from './pages/voter/CasteVote';
import Help from './pages/help/help';
function App() {
  const {account} = useContext(MetaMaskContext)
  const {user,authIsReady} = useAuthContext()
  console.log(user);
  return (
    <div className="App">
      {authIsReady&&
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={account===''||user===''?<Navigate to='login'/>:<Home/>}/>
          <Route path="login" element={user===''?<Login/>:<Navigate to='/metamask'/>}/>
          <Route path="metamask" element={user===''?<Navigate to='/login'/>:<Metamask/>}/>
          <Route path="signup" element={account===''||user===''?<SignUp/>:<Navigate to='/'/>}/>
          <Route path="voter" element={account===''||user===''?<Navigate to='/login'/>:<Voter/>}/>
          <Route path="viewvote" element={account===''||user===''?<Navigate to='/login'/>:<ViewVoter/>}/>
          <Route path="castevote" element={account===''||user===''?<Navigate to='/login'/>:<CasteVoter/>}/>
          <Route path="chairman" element={account===''||user===''?<Navigate to='/login'/>:<ChairMan/>}/>
          <Route path="help" element={account===''||user===''?<Navigate to='/login'/>:<Help/>}/>
        </Routes>
      </BrowserRouter>}       
    </div>
  );
}

export default App;
