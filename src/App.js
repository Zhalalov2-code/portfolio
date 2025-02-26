import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/footer' element={<Footer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
