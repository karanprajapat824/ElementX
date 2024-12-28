import './../Css/BigProductCard.css';
import { FaRegUserCircle } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaCode } from "react-icons/fa6";
import { useState } from 'react';
const BigProductCard = ({index})=>{

    const [getCode, setGetCode] = useState(false);

    const handleGetCode = () => {
        setGetCode(!getCode);
    }

    return(
        <>
            <div className="big-product-card" onMouseEnter={handleGetCode} onMouseLeave={handleGetCode}>
                <div className="big-card-content">{index}</div>
                {
                    getCode ? 
                        <button className='big-card-get-code-button'><FaCode style={{ fontSize: "large" }} />Get Code</button>
                        : null
                }
                <div className="big-card-detail">
                    <div className='big-card-bottum'><FaRegUserCircle style={{ fontSize: "large" }} />UserName</div>
                    <div className='big-card-bottum'><FcLike style={{ fontSize: "x-large" }} />50</div>
                </div>
            </div>
        </>
    )
}

export default BigProductCard;