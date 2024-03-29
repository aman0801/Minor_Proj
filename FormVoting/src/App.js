import './App.css';
import Login from './components/Login';
import ViewVote from './components/ViewVote';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/ViewVote" element={<ViewVote/>}/>
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
