import React from 'react';
import styled from 'styled-components';
import './../Css/ElementCard.css';

const ElementCard = (props) => {
  const Container = styled.div`${props.css}`;
  const { height, width } = props;

  const elementCardBody = {
    height: height || '40vh',
    width: width || '14vw',
  };

  return (
    <div>
      <div className='element-card-body' style={elementCardBody}>
        <div className='element-content-body' style={elementCardBody}>
          <div>
            <Container dangerouslySetInnerHTML={{ __html: props.html }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementCard