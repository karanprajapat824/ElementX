import React from 'react';
import styled from 'styled-components';
import './../Css/ElementCard.css';
import { useMemo } from 'react';

const ElementCard = React.memo(
  (props) => {
    const Container = styled.div`${props.css}`;
    let { height, width, css } = props;
    console.log(height)
    console.log(width)
    return (
      <div>
        <div style={{height : height,width : width}} className='element-card-body'>
          <div className='element-content-body'>
            <div>
              <Container dangerouslySetInnerHTML={{ __html: props.html }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
)

export default ElementCard