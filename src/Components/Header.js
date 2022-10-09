import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import LemonLogo from '../Assets/LemonLogo.png'
import BackgroundStars from '../Assets/BackgroundStars.png'
import StartBuildingButton from './StartBuildingButton'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const HeaderWrapper = styled.header`
     
    background-image: url(${BackgroundStars}), linear-gradient(180deg, #0F172B 0%, #5413C1 64.58%);
    padding: 30px 136.57px;

    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: var(--min-navbar-height);
    }

    nav ul{
        font-family: 'Clash Display';
        font-size: 18px;
        font-weight: 500;
        display: flex;
        list-style-type: none;
        padding-inline-start: 0; 
        text-align: center;
        gap: 100px;
    }

    .header-main{
        display: flex;
        align-items: center;
    }

    h1{
        font-family: 'Clash Display';
        font-size: 80px;
        font-weight: 600;
        margin-block: 0;
        line-height: 94px;
    }

    p{
        font-family: Poppins;
        font-size: 25px;
        font-weight: 400;
        margin: 2em 0;
    }

    .header-main section{
        flex: 0.70;
        margin-right: 100px;
    }

    .header-main img{
        flex: 0.3;
        
    }

    .header-main section{
        flex: 0.7;
    }

    a{
        text-decoration: none;
        color: #FFF;
        transition: 0.7s ease;
    }

    a:hover{
        color: #000;
    }

    .hamburger{
        display: none;
        cursor: pointer;
    }

    .bar{
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: #FFF;
    }

    .logo-hamburger-flexbox{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 1440px){
        .hamburger{
            display: block;     
        }

        .hamburger.active .bar:nth-child(2){
            opacity: 0;
        }

        .hamburger.active .bar:nth-child(1){
            transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active .bar:nth-child(3){
            transform: translateY(-8px) rotate(-45deg);
        }

        nav ul{
            position: fixed;
            left: -100%;
            top: var(--min-navbar-height);
            gap: 50px;
            width: 100%;
            height: 100%;
            margin: 0;
            background: #020203;
            flex-direction: column;
            text-align: center;
            transition: 0.3;
            font-family: Clash Display;
            font-size: 30px;
            line-height: 40px;
            padding-top: 100px;
        }

        a{
            margin: 16px 0;
        }

        nav ul.active{
            left: 0;
        }

        .header-main{
            display: block;
            align-items: center;
        }

    }
    
`

const Header = ({mainText, subText, illustration, padding}) => {

    const [isActive, setisActive] = useState(false);

    const toggleClass = () => {
        setisActive(!isActive);
        if (isActive) {
            document.body.style.overflowY = 'visible';  
        } else {
            document.body.style.overflowY = 'hidden';
        }
    }

    useEffect(() => {
      
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('ul');
        const header = document.querySelector('.header');

        if (isActive) {
            header.style.background = '#020203'
         }else{
            header.style.background = `url(${BackgroundStars}), linear-gradient(180deg, #0F172B 0%, #5413C1 64.58%)`;
         } 

        document.querySelectorAll('a').forEach(i => i.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflowY = 'visible';  
            header.style.background = `url(${BackgroundStars}), linear-gradient(180deg, #0F172B 0%, #5413C1 64.58%)`;
        }))

        function resetToDefault(){
            if (window.screen.availWidth >= 1440){
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflowY = 'visible';
                header.style.background = '';
            }
        }

        window.addEventListener('resize', resetToDefault);
    })

    

  return (
    <HeaderWrapper className='header'>
        <nav>
            <img src={LemonLogo} alt='logo of lemon'></img>
            <ul className={isActive? "active" : null}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><HashLink to='#book-a-session' smooth>Work With Us</HashLink></li>
                <li><HashLink to='/#about-us' smooth>About Us</HashLink></li>
                <li><HashLink to='#footer' smooth>Contact</HashLink></li>
            </ul>
            <div className={isActive ? "hamburger active" : "hamburger"} onClick={toggleClass}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </nav>
        <div className='header-main' style={{padding: padding}}>
            <section>
                <h1>{mainText}</h1>
                <p>{subText}</p>
                <StartBuildingButton text={'Work With Us'}/>
            </section>
            <img src={illustration} alt='illustration'></img>
        </div>
    </HeaderWrapper>
  )
}

export default Header