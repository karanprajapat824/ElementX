import { useState } from 'react';
import './../Css/Navbar.css';
import {MdKeyboardArrowDown,MdOutlineSmartButton} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { BsFillMoonFill } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { ImSun } from "react-icons/im";
import Model from './Model';



const Navbar = (props) => {
  const [login,setLogin] = useState(true);
  const [model,setModel] = useState(false);
  const navigateTo = useNavigate();
  
  const username = localStorage.getItem('username');
  let firstLetter = '';
  if(username) firstLetter = username.charAt(0).toUpperCase();
  

  const handleMode = () => {
    props.setTheme(!props.theme);
  }


  const handleCreateRequest = ()=>{
    login ? setModel(!model) : navigateTo('/login',{state : {text : "Login"}}) ;
  }

  return (
    <>
      <div> 
        {
          model ? <Model setModel={setModel} model={model} /> : null
        }
      </div>
      <div className='navbar'>
       <div className='navbar-right'>
        <div className='logo' onClick={()=>navigateTo('/')}>ElementX</div>
        <button className="navbar-button" onClick={()=>navigateTo('/elements')}>Elements&nbsp;<MdKeyboardArrowDown /></button>
      </div>
      <div className='navbar-left'>
          <button className="navbar-button" onClick={handleCreateRequest}>Create</button>
          
        {
          login ? <>
          <div className='profile-icon' title="Profile" onClick={()=>navigateTo('/profile')}>
            <div className='profile-letter'>
                k
            </div>
          </div>
          </> : <>
            <button className="navbar-button" onClick={()=>navigateTo('/login',{state : {text : "login"}})}>Log in</button>
            <button className="navbar-button" onClick={()=>navigateTo('/login',{state : {text  : "Register"}})}>Sign up</button> 
          </>
        }
        <div className='Mode'> 
        {
              props.theme ? <ImSun onClick={handleMode} style={{ color: "white" }} /> : <BsFillMoonFill onClick={handleMode} />
        }
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar