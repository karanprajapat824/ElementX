import React,{useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Hero from './Components/Hero';
import Element from './Components/Element';
import './App.css';

const App = () => {
  const [active,setActive] = useState('All');
  return (
    <div>
      <div id='background'></div>
      <BrowserRouter >
          <Routes >
            <Route path='/' element={<Hero />} />
            <Route path='elements' element={<Element active={active} setActive={setActive} />}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App