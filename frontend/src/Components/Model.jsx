import './../Css/Model.css';
import { AiFillHome, AiOutlineCreditCard, AiFillCheckCircle } from 'react-icons/ai';
import { CgPlayButtonO, CgMoreVertical } from 'react-icons/cg';
import { VscOutput } from 'react-icons/vsc';
import { LuTextCursorInput } from 'react-icons/lu';
import { TbLoader3 } from 'react-icons/tb'
import { BsUiRadiosGrid, BsToggles } from 'react-icons/bs'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Model = ({setModel})=>{
	const [active,setActive] = useState("button");
	const navigateTo = useNavigate();

	const activeCss = {
		border : "3px solid aqua",
		boxShadow : "0px 0px 5px aqua"
	}

	const handleCreateRequest = ()=>{
		setModel(false);
		navigateTo("/create",{state : {crate : active}});
	}


	return(
		<>
		<div className='model-body'>
			<div className='model-content'>
					<div className='close-button'><IoMdCloseCircleOutline onClick={()=>setModel(false)}/></div>
					<div className='model-heading'>What are you making?</div>
				<div className='model-items'>
						<label onClick={()=>setActive("button")} style={active == "button" ? activeCss : null} ><CgPlayButtonO className='symbols'/>Button</label>
						<label onClick={()=>setActive("form")} 	style={active == "form" ? activeCss : null}><VscOutput className='symbols' />Form</label>
						<label onClick={()=>setActive("card")} 	style={active == "card" ? activeCss : null}><AiOutlineCreditCard className='symbols' />Card</label>
						<label onClick={()=>setActive("toggleSwitche")} style={active == "toggleSwitche" ? activeCss : null}><BsToggles className='symbols' />Toggle Switche</label>
						<label onClick={()=>setActive("radioButton")} style={active == "radioButton" ? activeCss : null}><BsUiRadiosGrid className='symbols' />Radio Button</label>
						<label onClick={()=>setActive("loader")} style={active == "loader" ? activeCss : null}><TbLoader3 className='symbols' />Loader</label>
						<label onClick={()=>setActive("input")} style={active == "input" ? activeCss : null}><LuTextCursorInput className='symbols' />Input</label>
						<label onClick={()=>setActive("checkBoxes")} style={active == "checkBoxes" ? activeCss : null}><AiFillCheckCircle className='symbols' />Check Boxes</label>
				</div>
				<div>
					<button className='create-button' onClick={handleCreateRequest}>Create</button>
				</div>
			</div>
		</div>
		</>
		)
}

export default Model;