import React from 'react'
import styled from 'styled-components'
import LemonLogo from '../Assets/LemonLogo.png'
import BackgroundStars from '../Assets/BackgroundStars.png'
import StartBuildingButton from './StartBuildingButton'

const HeaderWrapper = styled.header`
     
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
        text-align: center;
    }

    .space-between{
        // responsive effect needed here
        margin-left: 100px;
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

    a{
        text-decoration: none;
        color: #FFF;
    }
    
`

const Header = ({mainText, subText, illustration}) => {
  return (
    <HeaderWrapper>
        <nav>
            <img src={LemonLogo} alt='logo of lemon'></img>
            <ul>
                <a href='#'><li className='space-between'>Home</li></a>
                <li className='space-between'>Projects</li>
                <li className='space-between'>Work With Us </li>
                <a href='#about-us'><li className='space-between'>About Us</li></a>
                <a href='#footer'><li className='space-between'>Contact</li></a>
            </ul>
        </nav>
        <div className='header-main'>
            <section>
                <h1>{mainText}</h1>
                <p>{subText}</p>
                <StartBuildingButton text={'Work With Us '}/>
            </section>
            <img src={illustration} alt='illustration'></img>
        </div>
    </HeaderWrapper>
  )
}

export default Header