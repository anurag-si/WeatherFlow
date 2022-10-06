import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>                    
    </div>
  );
}

export default App;
