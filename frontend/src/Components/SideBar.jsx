import React, { useState } from 'react'
import { AiFillHome,AiOutlineCreditCard,AiFillCheckCircle } from 'react-icons/ai';
import { CgPlayButtonO,CgMoreVertical } from 'react-icons/cg';
import { VscOutput } from 'react-icons/vsc';
import { LuTextCursorInput } from 'react-icons/lu';
import { TbLoader3 } from 'react-icons/tb'
import { BsUiRadiosGrid,BsToggles } from 'react-icons/bs'
import './../Css/SideBar.css';

const SideBar = (props) => {
  let activeMode = {
    color : "rgb(77,175,200)",
    textShadow  : "0 0 10px rgba(77,175,200,0.3),0 0 10px rgba(77,175,200,0.3),0 0 10px rgba(77,175,200,0.3)",
    display : "flex",
    justifyContent : "start",
    alignItem : "start",
    backgroundColor : "#333333",
    padding : "8px",
    width : '11.5rem',
    borderRadius : "8px",
    gap : '22px',
    marginRight : "2rem"

  }
  let inActiveMode = {
    color : "white",
    display : "flex",
    justifyContent : "start",
    alignItem : "start",
    width : "11.5rem",
    padding : "8px",
    gap : '22px',
    marginRight : "2rem"
  }
  let handleButtonRequest = () => {
    props.setActive('Buttons');
  }
  let handleCardRequest = () => {
    props.setActive('Cards');
    
  }
  let handleCheckBoxRequest = () => {
    props.setActive('Check Boxes');
  }
  let handleFormRequest = () => {
    props.setActive('Forms');
  }
  let handleOtherRequest = () => {
    props.setActive('Others');
  }
  let handleAllRequest = () => {
    props.setActive('All');
  }
  let handleInputsRequest = () => {
    props.setActive('Inputs');
  }
  let handleLoadersRequest = () => {
    props.setActive('Loaders');
  }
  let handleRadioButtonRequest = () => {
    props.setActive('Radio Buttons');
  }
  let handletoggleSwitchesRequest = () => {
    props.setActive('Toggle Switches');
  }
  return (
    <div >
      <div className="content">
              <div className="options">
                <label className="sideBarLabels" style={props.active === "All" ? activeMode : inActiveMode} onClick={handleAllRequest}><AiFillHome />All</label>
                <label className="sideBarLabels" style={props.active === "Buttons" ? activeMode : inActiveMode} onClick={handleButtonRequest}><CgPlayButtonO />Button</label>
                <label className="sideBarLabels" style={props.active === "Forms" ? activeMode : inActiveMode} onClick={handleFormRequest}><VscOutput />Form</label>
                <label className="sideBarLabels" style={props.active === "Cards" ? activeMode : inActiveMode} onClick={handleCardRequest}><AiOutlineCreditCard />Card</label>
                <label className="sideBarLabels" style={props.active === "Check Boxes" ? activeMode : inActiveMode} onClick={handleCheckBoxRequest}><AiFillCheckCircle />Check box</label>
                <label className="sideBarLabels" style={props.active === "Inputs" ? activeMode : inActiveMode} onClick={handleInputsRequest}><LuTextCursorInput />Inputs</label>
                <label className="sideBarLabels" style={props.active === "Loaders" ? activeMode : inActiveMode} onClick={handleLoadersRequest}><TbLoader3 />Loaders</label>
                <label className="sideBarLabels" style={props.active === "Radio Buttons" ? activeMode : inActiveMode} onClick={handleRadioButtonRequest}><BsUiRadiosGrid />Radio Buttons</label>
                <label className="sideBarLabels" style={props.active === "Toggle Switches" ? activeMode : inActiveMode} onClick={handletoggleSwitchesRequest}><BsToggles />toggle Switches</label>
                <label className="sideBarLabels" style={props.active === "Others" ? activeMode : inActiveMode} onClick={handleOtherRequest}><CgMoreVertical />Other</label>
              </div>
      </div>
    </div>
  )
}
export default SideBar
