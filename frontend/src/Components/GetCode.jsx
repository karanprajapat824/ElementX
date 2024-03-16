import React, { useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './../Css/GetCode.css';
import styled from 'styled-components';
import { MdKeyboardBackspace } from "react-icons/md";
import SideBar from './SideBar'
 
  const GetCode = (props) => {
  const [html,setHtml] = useState('');
  const [css,setCss] = useState('');
  const [textField,setTextField] = useState('css');


  const navigateTo = useNavigate();

  const Container = styled.div`${css}`;

  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const _id = urlParams.get('_id');
  
    const fetchData = async ()=>{
      const response = await fetch('http://localhost:4040/getElementById',{
        method : 'POST',
        body : JSON.stringify({_id}),
        headers : {
          'Content-Type' : 'application/json'
        }
      })
      const data = await response.json();
      setHtml(data.data[0].html);
      setCss(data.data[0].css);
    };
    fetchData();
    
  },[]);
  return (
    <>
    <div className='getCode-background'>

      <div className='getCode-back-button' onClick={()=>navigateTo('/elements')}>
        <MdKeyboardBackspace style={
          {
            fontSize : "28px",
          }
        }/> 
        Go Back
      </div>
      <div className='getCode-container'>
        <div className='getCode-output-container'>
          <Container dangerouslySetInnerHTML={{__html : html}} />
        </div>
        <div className='getCode-input-container'>
        <div className='getCode-navbar'>
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
        {
          textField === 'html' ?
          <div className='getCode-input-textarea-container'>
            <textarea value={html} onChange={(e)=>setHtml(e.target.value)} placeholder='html'/>
          </div> : 
          <div className='getCode-input-textarea-container'>
            <textarea value={css} onChange={(e)=>setCss(e.target.value)} placeholder='css'/>
          </div>
          
        }
        
        
        </div>
      </div>
    </div>
    </>
  )
}

export default GetCode
