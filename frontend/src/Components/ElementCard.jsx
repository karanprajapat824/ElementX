import React from 'react';
import styled from 'styled-components';
import './../Css/ElementCard.css';
import { CgProfile } from "react-icons/cg";
import { FcLike } from "react-icons/fc";
import { BiCodeAlt } from "react-icons/bi"

const ElementCard = React.memo(
  (props) => {
    const Container = styled.div`${props.css}`;
    let { height,width,border} = props;
    const addCss = {
      height : height,
      width : width,
      border : border
    }
    console.log(props);
    return (
      <div className='card' style={addCss}>
        <div className='card-body'>    
          <Container dangerouslySetInnerHTML={{ __html: props.html }} />
        </div>
        <div className='card-footer'> 
        <div className='card-profile'><CgProfile style={{fontSize : "2vw"}}/>{props.username}</div>
         <div className='card-like-button'><FcLike style={{fontSize : "2vw"}} />{props.likes}</div>
        </div>
        <a href={`/code?_id=${props._id}`}>
          <button className='card-getcode-button'><BiCodeAlt style={{color : "white",fontSize : "2vw"}}/>Get Code</button>
        </a>
      </div>
      
    );
  }
)

export default ElementCard