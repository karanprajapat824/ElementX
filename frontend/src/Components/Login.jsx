import './../Css/Login.css';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Carousel from './Carousel';
const Login = ()=>{
	const location = useLocation();
	const [passwordVisible,setPasswordVisible] = useState(false);
	const login = useRef();
	const {text = ""} = location.state || {};
	const array = [1,2,3,4,5,6,7,89,10]
	useEffect(()=>{
		login.current.focus();
	},[]);
	return(
		<>	
			<div className='login-page'>	
			<div className="login">
				<div className="login-form">
					<div className="login-heading">{text}</div>
					<div className='login-method'>
						<div className='login-inputs'>
							<input className='login-input' ref={login} placeholder="Email" type="text"/>
								<input className='login-input' placeholder="password" type={passwordVisible ? "text" : "password"}/>
								<span className='password-visible' onClick={() => setPasswordVisible(!passwordVisible)}>{passwordVisible ? <div>👁️</div> : <div>🙈</div>}</span>
							<button className='login-button'>{text}</button>
							<div className='faded-line'></div>
						</div>
						<div className='Login-using'>
							{text} using 
							<div className='other-login-methods'>
								<FcGoogle />
								<FaGithub />
							</div>
						</div>
						<div className='faded-line'></div>
					</div>
					<div className='new-user'>
						{
							text == "Register" ? 
							<div>Have an account <a className='sign-up'>Login</a> </div>
							: 
							<div>Not have an account?
							< a className='sign-up'>Sign Up</a> </div>
						}
						
						
					</div>
				</div>
			</div>
			<div className='carousel-in-login'>
			<Carousel array={array}/>
			</div>
			</div>
		</>
		)
}

export default Login;