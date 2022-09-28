import React from 'react'
import styled from 'styled-components'
import LemonLogo from '../Assets/LemonLogo.png'
import BackgroundStars from '../Assets/BackgroundStars.png'
import StartBuildingButton from './StartBuildingButton'

const HeaderWrapper = styled.div`

    @import url('http://fonts.cdnfonts.com/css/clash-display');   
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');         
    background-image: url(${BackgroundStars}), linear-gradient(180deg, #0F172B 0%, #5413C1 64.58%);
    padding: 30px 136.57px;

    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    nav ul{
        font-family: 'Clash Display';
        font-size: 18px;
        font-weight: 500;
        display: flex;
        list-style-type: none;
        padding-inline-start: 0; 
    }

    .space-between{
        margin-left: 136.57px;
    }

    .header-main{
        display: flex;
        align-items: center;
        padding 30px 0;
    }

    h1{
        font-family: 'Clash Display';
        font-size: 80px;
        font-weight: 600;
        margin-block: 0;
    }

    p{
        font-family: Poppins;
        font-size: 25px;
        font-weight: 400;
        margin: 2em 0;
    }

    .header-main section{
        flex: 0.70;
        margin-right: 136.57px;
    }

    .header-main img{
        flex: 0.30;
    }
    
`

const Header = ({mainText, subText, illustration}) => {
  return (
    <HeaderWrapper>
        <nav>
            <img src={LemonLogo} alt='logo of lemon'></img>
            <ul>
                <li className='space-between'>Home</li>
                <li className='space-between'>Work</li>
                <li className='space-between'>Work With Us </li>
                <li className='space-between'>About Us</li>
                <li className='space-between'>Contact</li>
            </ul>
        </nav>
        <div className='header-main'>
            <section>
                <h1>{mainText}</h1>
                <p>{subText}</p>
                <StartBuildingButton text={'START BUILDING'}/>
            </section>
            <img src={illustration} alt='illustration'></img>
        </div>
    </HeaderWrapper>
  )
}

export default Header