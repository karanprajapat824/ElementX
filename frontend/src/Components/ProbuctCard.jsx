import './../Css/ProductCard.css';
import { FaRegUserCircle } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaCode } from "react-icons/fa6";
import { useState } from 'react';
const ProbuctCard = ({index})=>{
    const [getCode,setGetCode] = useState(false);

    const handleGetCode = ()=>{
        setGetCode(!getCode);
    }

    return(
        <>
        <div className="product-card" onMouseEnter={handleGetCode} onMouseLeave={handleGetCode}>
            <div className="card-content">{index}</div>
            {
                getCode ? 
                        <button className='get-code-button'><FaCode style={{ fontSize: "large" }} />Get Code</button>
                        : null
            }
                
            <div className="card-detail">
                    <div className='card-bottum'><FaRegUserCircle style={{fontSize:"large"}}/>UserName</div>
                    <div className='card-bottum'><FcLike style={{ fontSize: "x-large" }}/>50</div>
            </div>
        </div>
        
        </>
    )
}

export default ProbuctCard;