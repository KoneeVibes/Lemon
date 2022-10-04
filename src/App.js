import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Projects from './Pages/Projects';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
