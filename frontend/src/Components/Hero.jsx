import React, { useEffect, useState } from 'react';
import './../Css/Hero.css';
import Carousel from './Carousel';
import AnimationText from './AnimationText';
import RandomElement from './RandomElement';
import ExploreAll from './ExploreAll';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const array = [1,2,3,4,5,6,7,8,9,10];
const Hero = () => {
  
  const [data, setData] = useState([
    {
      html: '<button>hello</button>',
      css: 'button{padding: 3vw;}',
      username: 'karan',
    },
  ]);

  
  
  
  useEffect(() => {
    let intervalId;

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4040/getRandomElement', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        setData(responseData.data);

        
        if (!intervalId) {
          intervalId = setInterval(fetchData, 10000);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <>
      <div className="hero">
        <div className="UpperCon">
         <AnimationText />
         <RandomElement />
        </div>
        <div style={{marginBottom : "10vh"}}>
          <Carousel array={array} title={"Explore"}/>
          <ExploreAll />
        </div>
        
      </div>
    </>
  );
};

export default Hero;
