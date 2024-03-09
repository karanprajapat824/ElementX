import { useState } from 'react';
import './../Css/Navbar.css';
import {MdKeyboardArrowDown,MdOutlineSmartButton} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { SiGoogleforms } from 'react-icons/si';
import {PiCardsLight} from 'react-icons/pi';
import {BsUiRadiosGrid , BsToggle2Off} from 'react-icons/bs';
import { FiCheckCircle } from 'react-icons/fi';
import { TbInputAi , TbLoader3 } from 'react-icons/tb';
import { CgDetailsMore } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io"


const Navbar = (props) => {

  const [responsive,setResponsive] = useState(true);
  const [model,setModel] = useState(false);
  const [dropList,setDropList] = useState(true);
  const navigateTo = useNavigate();
  
  const username = localStorage.getItem('username');
  let firstLetter = '';
  if(username) firstLetter = username.charAt(0).toUpperCase();
  

  const togglenavbar = ()=>{
    setResponsive(!responsive);
  };

  const handleDropList = ()=>{
    setDropList(!dropList);
  }
  const handleContinueRequest = ()=>{
    setModel(false);
    props.login ? navigateTo('/create') : navigateTo('/login') ;
  }
  const handleCreateRequest = ()=>{
    setModel(true);
    setResponsive(true);
  }
  const goToBrowseAll = ()=>{
    props.setActive("All");
    setResponsive(true);
    navigateTo('/elements');
  }
  const goToButtons = ()=>{
    props.setActive("Buttons");
    setResponsive(true);
    navigateTo('/elements');
  }
  const goToForms = ()=>{
    props.setActive("Forms");
    setResponsive(true);
    navigateTo('/elements');
  }
  const goToCards = ()=>{
    props.setActive("Cards");
    setResponsive(true);
    navigateTo('/elements');
  }
  const goToToggleButtons = ()=>{
    props.setActive("Toggle Switches");
    setResponsive(true);
    navigateTo('/elements');
  }
  const goToRadioButtons = ()=>{
    props.setActive("Radio Buttons");
    setResponsive(true);
    navigateTo('/elements');
  }
  const goToInputs = ()=>{
    props.setActive("Inputs");
    setResponsive(true);
    navigateTo('/elements');
  }
  const goToLoaders = ()=>{
    props.setActive("Loaders");
    setResponsive(true);
    navigateTo('/elements');
  }
  const goToCheckBoxes = ()=>{
    props.setActive("Check Boxes");
    setResponsive(true);
    navigateTo('/elements');
  }

  const handleElementRequest =()=>{
    setResponsive(true);
    navigateTo('/elements');
  }

  return (
    <>
    <div>
    { 
    model ? <>
      <div className='model-background' onClick={()=>setModel(false) `${navigateTo('/')}`}></div>
      <div className='model-frame'>
          <h1>What are you Making?</h1>
          <div className='create-item'>
            <div onClick={()=>props.setElement("Buttons")}>
              {
                props.element === "Buttons" ? 
                <div className='selected-item'>
                  <MdOutlineSmartButton style={{
                    fontSize : "50px",
                  }}/>
                  <label>Button</label>
                </div>                
                :
                <div className='item'>
                  <MdOutlineSmartButton style={{
                    fontSize : "50px",
                  }}/>
                  <label>Button</label>
                </div>
              }
            </div>
            <div onClick={()=>props.setElement("Forms")}>
              {
                props.element === "Forms" ? 
                <div className='selected-item'>
                  <SiGoogleforms style={{
                    fontSize : "50px",
                  }}/>
                  <label>Forms</label>
                </div>                
                :
                <div className='item'>
                  <SiGoogleforms style={{
                    fontSize : "50px",
                  }}/>
                  <label>Forms</label>
                </div>
              }
            </div>
            <div onClick={()=>props.setElement("Cards")}>
              {
                props.element === "Cards" ? 
                <div className='selected-item'>
                  <PiCardsLight style={{
                    fontSize : "50px",
                    }}/>
                  <label>Cards</label>
                </div>                
                :
                <div className='item'>
                  <PiCardsLight style={{
                    fontSize : "50px",
                    }}/>
                  <label>Cards</label>
                </div>
              }
            </div>
            <div onClick={()=>props.setElement("RadioButtons")}>
              {
                props.element === "RadioButtons" ? 
                <div className='selected-item'>
                  <BsUiRadiosGrid style={{
                    fontSize : "40px",
                      }}/>
                  <label>Radio Button</label>
                </div>                
                :
                <div className='item'>
                  <BsUiRadiosGrid style={{
                  fontSize : "40px",
                    }}/>
                  <label>Radio Button</label>
                </div>
              }
            </div>
            <div onClick={()=>props.setElement("CheckBoxes")}>
              {
                props.element === "CheckBoxes" ? 
                <div className='selected-item'>
                  <FiCheckCircle style={{
                  fontSize : "40px"
                }}/>
                <label>Check Box</label>
                </div>                
                :
                <div className='item'>
                  <FiCheckCircle style={{
                  fontSize : "40px"
                }}/>
                <label>Check Box</label>
                </div>
              }
            </div>
            <div onClick={()=>props.setElement("Inputs")}>
              {
                props.element === "Inputs" ? 
                <div className='selected-item'>
                  <TbInputAi style={{
                  fontSize : "40px"
                }}/>
                <label>Input</label>
                </div>                
                :
                <div className='item'>
                  <TbInputAi style={{
                  fontSize : "40px"
                }}/>
                <label>Input</label>
                </div>
              }
            </div>
            <div onClick={()=>props.setElement("ToggleSwitches")}>
              {
                props.element === "ToggleSwitches" ? 
                <div className='selected-item'>
                  <BsToggle2Off style={{
                  fontSize : "40px"
                }}/>
                <label>Toggle switche</label>
                </div>                
                :
                <div className='item'>
                  <BsToggle2Off style={{
                  fontSize : "40px"
                }}/>
                <label>Toggle switche</label>
                </div>
              }
            </div>
            <div onClick={()=>props.setElement("Loaders")}>
              {
                props.element === "Loaders" ? 
                <div className='selected-item'>
                  <TbLoader3 style={{
                  fontSize : "40px"
                }}/>
                <label>Loaders</label>
                </div>                
                :
                <div className='item'>
                  <TbLoader3 style={{
                  fontSize : "40px"
                }}/>
                <label>Loaders</label>
                </div>
              }
            </div>
          </div>
          <div className="navbar-Continue-btn">
            <button onClick={handleContinueRequest}>Continue</button>  
          </div>
          
        </div>
    </>
     : <div></div>}

    </div>
    <div className='navbar'>
      <div className='navbar-right'>
        <div className='logo' onClick={()=>navigateTo('/')}>ElementX</div>
        <button className='element-button' onClick={()=>navigateTo('/elements')}>Elements&nbsp;<MdKeyboardArrowDown /></button>
      </div>
      <div className='navbar-left'>
          <button onClick={handleCreateRequest}>Create</button>
        {
          props.login ? <>
          <div className='profile-icon' title="Profile" onClick={()=>navigateTo('/profile')}>
            <div className='profile-letter'>
                k
            </div>
          </div>
          </> : <>
            <button onClick={()=>navigateTo('/login')}>Log in</button>
            <button onClick={()=>navigateTo('/register')}>Sign up</button> 
          </>
        }
      </div>
      <div className='navbar-toggle'>
      {
        responsive ? <>
        <CgDetailsMore className='icon'  onClick={togglenavbar}/>
        </> : <>
        <IoClose className='icon'  onClick={togglenavbar}/>
        <div className='navbar-options'>
          <div className='options-banner'>
            <div className='top-options'>
            {
              props.login ? <div className='profile-card'>
              <div className='profile-icon2'>
                {firstLetter}
              </div>
              <div>Profile</div>
            </div>
            : <div className='buttons'>
              <button className='options-button' onClick={()=>navigateTo('/login')}>Log in</button>
              <button className='options-button' onClick={()=>navigateTo('/register')}>Sign up</button>
            </div>
            }
            <div className='buttons'>
            <button className='options-button' onClick={handleElementRequest}>Elements&nbsp;<MdKeyboardArrowDown className='options-icon'/></button>
            <button className='options-button' onClick={handleCreateRequest}><IoMdAddCircleOutline className='options-icon'/>&nbsp;Create</button>
            </div>
            </div>
            <div className='bottum-options'>
              <div className='categories' onClick={handleDropList}>
                <div>Categories</div>
                <div><MdKeyboardArrowDown className='options-icon'/></div>
              </div>
              <div className='categories-options'>
              {
                dropList ? <>
                <div onClick={goToBrowseAll}>Browse All</div>
                <div onClick={goToButtons}>Buttons</div>
                <div onClick={goToCheckBoxes}>CheckBoxes</div>
                <div onClick={goToToggleButtons}>Toggle Switches</div>
                <div onClick={goToCards}>Cards</div>
                <div onClick={goToLoaders}>Loaders</div>
                <div onClick={goToInputs}>Inputs</div>
                <div onClick={goToRadioButtons}>Radio Buttons</div>
                <div onClick={goToForms}>Forms</div>
                </> : <></>
              }
              </div>
              
            </div>
          </div>  
        </div>
        
        </>
      }
      </div>
    </div>
    </>
  )
}

export default Navbar