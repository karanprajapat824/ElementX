import React, { useEffect, useMemo, useState } from 'react';
import ElementCard from './ElementCard';
import {ImSearch} from 'react-icons/im';
import { BsStars } from 'react-icons/bs';
import { GoDotFill } from "react-icons/go";
import { BiCodeAlt } from "react-icons/bi"
import './../Css/Hero.css';
import Navbar from './Navbar';

const Hero = () => {
  
  const text = ['Buttons','Forms','Cards','Loaders','Radio Buttons','Toggle Switches','Check Boxes'];
  const [items,setItems] = useState("");
  const [data,setData] = useState([]);

useEffect(() => {
  const plaintext = async () => {
    let index;
    for (index = 0; index < text.length; index++) {
      for (let charIndex = 0; charIndex < text[index].length; charIndex++) {
        setItems((prevText) => prevText + text[index][charIndex]);
        await delay(100);
      }

      for (let charIndex = text[index].length; charIndex >= 0; charIndex--) {
        await delay(100);
        setItems(text[index].substring(0,charIndex));
      }
      if(index == 6) index = 0;
    }
  };

  const delay = async (time) => {
    await new Promise((resolve) => setTimeout(resolve, time));
  };

  plaintext();

}, [setItems]);

useEffect(() => {

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4040/getElement', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      });
      const responseData = await response.json();
      setData(responseData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);


  return (
    <div>
      <Navbar />
        <div className='hero'>         
          <div className='UpperCon'>
            <div className='uppercon-left'>
              <h1 className='heading1'>Open-Source </h1>
              <h1 className='subheading'>UI Building Blocks</h1> 
              <h1 className='heading2'>We Provide <span>{items}<span>|</span></span></h1>
              <h2 className='heading3'>Create, Share & Use <span className='beautiful'> <BsStars />Beautiful</span> Custom <br />Elements Made With CSS</h2>
            <div className='main-input'>
              <div className='input-container'>
                <input className='input' placeholder='Search for  UI elements,creators,tags....'/>
                <button className="searchButton"><ImSearch className='search-icon'/>&nbsp;&nbsp;&nbsp;Search</button>  
              </div>
            </div>
          </div>
            <div className='uppercon-right'>
              <div className='hero-element-structure'>
                  <div className='slide'>
                    <div className='slide-navbar'>
                      <GoDotFill className='dot-1'/>
                      <GoDotFill className='dot-2'/>
                      <GoDotFill className='dot-3'/>
                    </div>
                    <div className='slide-loader'></div>
                    <div className='slide-body'>
                      {
                        data?.map((each)=>{
                           
                          return(
                            <>
                              <ElementCard html={each.html} css={each.css} key={each.__id} width="45vw" height="57vh" />
                            </>
                            
                          )
                        })
                      }
                    </div>
                  </div>
              </div>
            </div>
        </div>
        </div>
        
    </div>
    
  )
}

export default Hero