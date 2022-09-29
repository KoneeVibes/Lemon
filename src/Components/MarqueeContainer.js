import React from 'react'
import styled from 'styled-components'

const MarqueeWrapper = styled.marquee`

    height: 91px;
    background: #1B1232;

    h4{
        font-family: Clash Display;
        font-size: 27px;
        font-weight: 500;
    }
`

const MarqueeContainer = () => {
  return (
    <MarqueeWrapper>
          <h4>Award winning design agency. Award winning design agency. Award winning design agency. Award winning design agency. Award winning design agency.</h4>
    </MarqueeWrapper>
  )
}

export default MarqueeContainer