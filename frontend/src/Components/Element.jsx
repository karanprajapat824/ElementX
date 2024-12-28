import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import './../Css/Element.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import ProbuctCard from './ProbuctCard';
import BigProductCard from './BigProductCard';

const Element = (props) => {
  const [active,setActive]  = useState("All");
  const navigateTo = useNavigate();
  
  const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

  return (
    
    <div className='element-container'>
      <div>
        <SideBar active={active} setActive={setActive}/>
      </div>
      <div className='element-card-container'>
        <div className='element-navbar'>
          <div className='back-button' onClick={()=>navigateTo('..')}><FaArrowLeftLong />Go Back</div>
        </div>
        <div className='element-cards'>
          {
            array.map((index)=>(
                active == "Forms" || active == "Cards" ? <BigProductCard index={index}/> : <ProbuctCard index={index}/>
            ))
          }
          <button className='previous-button'><FaArrowLeftLong />Previus</button>
          <button className='next-button'>Next<FaArrowRightLong/></button>
        </div>
      </div>
    </div>
  );
};

export default Element;
