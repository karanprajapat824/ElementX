import React, { useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './../Css/GetCode.css';
import styled from 'styled-components';
import { MdKeyboardBackspace } from "react-icons/md";
import Navbar from './Navbar';
import { CgProfile } from "react-icons/cg";
 
  const GetCode = (props) => {
  const [html,setHtml] = useState('<button>check it</button>');
  const [css,setCss] = useState('button{padding : 1vw;}');
  const [textField,setTextField] = useState('css');
  const [username,setUsername] = useState('Username');


  const navigateTo = useNavigate();

  const Container = styled.div`${css}`;

  return (
    <>
    <Navbar />
    <div className='getcode-body'>
        <div onClick={()=>navigateTo('..')} className='getcode-back-button'>
        <MdKeyboardBackspace style={
          {
            fontSize : "2vw",
          }
        }/>
        Go Back
        </div>
        <div className='getcode-container'>
          <div className='getcode-output'>
            <Container dangerouslySetInnerHTML={{__html : html}} />
          </div>
          <div className='getcode-input'>
            <div className='getcode-navbar'>
            {
            textField === 'html' ? 
            <button className='getCode-active-button' ><img src='./src/Components/html.png' style={{height : "20px"}}/>HTML</button> : 
            <button className='getCode-inActive-button' onClick={()=> setTextField('html')}><img src='./src/Components/html.png' style={{height : "20px"}}/>HTML</button>
            }
            { 
            textField === 'css' ? 
            <button className='getCode-active-button'><img src='./src/Components/css.png' style={{height : "22px"}}/>CSS</button> : 
            <button className='getCode-inActive-button' onClick={()=> setTextField('css')}><img src='./src/Components/css.png' style={{height : "22px"}}/>CSS</button>
            }
            </div>
            <div className='getcode-input-body'>
                {
                  textField === 'html' ? 
                    <textarea className='textarea' value={html} onChange={(e)=>setHtml(e.target.value)}/>
                  : 
                    <textarea  className='textarea' value={css} onChange={(e)=>setCss(e.target.value)}/>
                }
            </div>
            <div className='getcode-input-bottum'>
              <div className='getcode-profile'>
              <CgProfile style={{fontSize : "2vw"}}/>
                {username}
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default GetCode
