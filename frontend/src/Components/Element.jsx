import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import Navbar from './Navbar';
import './../Css/Element.css';

const Element = (props) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4040/get${props.active.replace(' ','')}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        setData(responseData.data);
      } else {
        console.log('HTTP error! Status:', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [props.active]);

  return (
    
    <div>
      <Navbar />
      <SideBar active={props.active} setActive={props.setActive} />
    </div>
  );
};

export default Element;
