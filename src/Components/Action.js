import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import StartBuildingButton from './StartBuildingButton'

const ActionWrapper = styled.div`
    
    .action-box{
        border-radius: 16px 16px 10px 10px;
        margin: 0 144px;
        padding: 2em 4em;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h2{
        font-family: Clash Display;
        font-size: 45px;
        font-weight: 600;
        line-height: 52.88px;
        flex: 40%;
        margin-right: 2em;
    }

    p{
      font-family: Poppins;
      font-size: 20px;
      font-weight: 500;
      line-height: 27px;
    }

    img{
        margin: 0 144px;
        position: relative;
        top: -0.531em;
    }

    @media(max-width: 768px){
      
      .action-box{
        display: block;
      }

    }

    @media (max-width: 420px){
      
      h2{
        font-size: 25px;
        line-height: 29px;
      }

      p{
        font-size: 12px;
        line-height: 16px;
      }

      .action-box{
        padding: 1em 2em;
        margin: 0 40px;
      }

      img{
        margin: 0 40px;
      }

    }
    
`

const Action = ({bgColor, src, color}) => {

  let image = useRef(null)
  
  useEffect(() => {

    function borderResize(){
      const border = document.querySelector('.action-box');
      image.current.style.width = border.getBoundingClientRect().width + "px";
    }

    window.addEventListener('resize', borderResize);
    borderResize();
  })

  return (
    <ActionWrapper style={{color: color}}>
      <div className='action-box' style={{backgroundColor: bgColor}}>
        <h2>Workshop with experts</h2>
        <div>
          <p>With our experienced team of professionals, you can expect sound ideas and solutions in a short term.</p>
          <StartBuildingButton text={'Work With Us'} />
        </div>
      </div>  
      <img src={src} alt='action border' ref={image}></img>
    </ActionWrapper>
  )
}

export default Action