import Home from './components/Home';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
