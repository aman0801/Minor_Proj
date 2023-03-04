import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './pages/login/Login'
import Metamask from './pages/metamask/MetaMask'
import SignUp from './pages/signup/SignUp'
import Voter from './pages/voter/Voter'
import ChairMan from './pages/chairman/ChairMan'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}/>
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
