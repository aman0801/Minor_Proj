import './App.css';
import Login from './components/Login';
import ViewVote from './components/ViewVote';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<ViewVote/>}/>
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
