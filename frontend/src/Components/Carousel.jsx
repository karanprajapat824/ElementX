import {  useEffect, useState } from 'react';
import './../Css/Carousel.css';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import ExploreAll from './ExploreAll';

const Carousel = ({array})=>{
    const [currentIndex,setCurrentIndex] = useState(0);
    const [direction,setDirection] = useState("right");

    const rightShift = ()=>{
        const intervalID = setInterval(() => {
            setCurrentIndex((prev) => (prev - 1));
        }, 50);
        return () => {
            clearInterval(intervalID);
        } 
    }

    const leftShift = ()=>{
        const intervalID = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1));
        }, 50);
        return () => {
            clearInterval(intervalID);
        }
    }
    useEffect(()=>{
        let cleanUpFunction;
        
        const startShift = ()=>{
            if(direction === "right") cleanUpFunction = rightShift();
            else cleanUpFunction = leftShift();
        }

        setTimeout(() => {
            if (cleanUpFunction) cleanUpFunction(); 
            setDirection((prev) => (prev === "right" ? "left" : "right"));
        }, 35000);
        
        startShift();

        return () => {
            if (cleanUpFunction) cleanUpFunction();
        };

    },[direction]);


    return(
        <>
        <div>
        <div className='carousel-container'>
            <div className='cards'>
                {array.map((item, index) => (
                    <div style={{
                        transform : `translate(${currentIndex}%)`,
                        transition : "transform 50ms ease-in-out"
                    }} className="card-container"
                        key={index}>
                        {item}
                        
                    </div>
                ))}
            </div>
            <div style={{justifyContent : "end"}} className='cards'>
                {array.map((item, index) => (
                    <div style={{

                        transform: `translate(${currentIndex*(-1)}%)`,
                        transition: "transform 50ms ease-in-out"
                    }} className="card-container"
                        key={index}>
                        {item}
                    </div>
                ))}
            </div>
            <div className='cards'>
                {array.map((item, index) => (
                    <div style={{
                        transform: `translate(${currentIndex}%)`,
                        transition: "transform 50ms ease-in-out"
                    }} className="card-container"
                        key={index}>
                        {item}
                    </div>
                ))}
            </div>          
        </div>
               
        </div>
        </>


    )
}

export default Carousel;