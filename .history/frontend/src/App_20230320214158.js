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
import {abi} from "./contracts/voting.json"
function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x9c01efbbe3c345331c3a5c111f68ef7a561a9512";
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
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
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
