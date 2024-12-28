import React,{useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Hero from './Components/Hero';
import Element from './Components/Element';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Create from './Components/Create';
import Profile from './Components/Profile';
import './App.css';

const App = () => {
  const [theme,setTheme] = useState(true);
  return (
    <div style={{
      backgroundColor : "black",
      filter : `${theme ? "invert(0%)" : "invert(100%)"}`
    }}>
      
      <BrowserRouter >
        <Navbar theme={theme} setTheme={setTheme}/>
        <div className='message'></div>
          <Routes >
            <Route path='/' element={<Hero />} />
            <Route path='elements' element={<Element />}/>
            <Route path='login' element={<Login />} />
            <Route path='create' element={<Create />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App