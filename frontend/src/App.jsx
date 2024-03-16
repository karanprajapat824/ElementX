import React,{useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Hero from './Components/Hero';
import Element from './Components/Element';
import GetCode from './Components/GetCode'
import './App.css';
import ElementCard from './Components/ElementCard';

const App = () => {
  const [active,setActive] = useState('All');
  return (
    <div>
      <div id='background'></div>
      <BrowserRouter >
          <Routes >
            <Route path='elementCard' element={<ElementCard height="50vh" width="30vw" />} />
            <Route path='/' element={<Hero />} />
            <Route path='elements' element={<Element active={active} setActive={setActive} />}/>
            <Route path='/code' element={<GetCode />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App