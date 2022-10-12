import React from 'react'
import styled from 'styled-components'

const MarqueeWrapper = styled.marquee`

    height: 91px;

    .hidden-text{
        display: none;
    }

    h4{
        font-family: Clash Display;
        font-size: 27px;
        font-weight: 500;
    }

    @media (max-width: 420px){
        font-size: 17px;
        line-height: 21px;
    }
    
`

const MarqueeContainer = ({bgColor}) => {
  return (
    <MarqueeWrapper style={{backgroundColor: bgColor}}>
      <h4 className='marquee'>Award winning design agency. Award winning design agency. Award winning design agency. Award winning design agency. Award winning design agency.</h4>
    </MarqueeWrapper>
  )
}

export default MarqueeContainer