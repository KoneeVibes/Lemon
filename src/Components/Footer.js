import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '../Assets/FacebookIcon.png'
import TwitterIcon from '../Assets/TwitterIcon.png'
import LinkedInIcon from '../Assets/LinkedInIcon.png'
import InstagramIcon from '../Assets/InstagramIcon.png'

const FooterWrapper = styled.footer`
    padding: 16px 136.57px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(227.07deg, #5413C1 0.43%, #131732 79.94%);

    p{
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
    }

    @media (max-width: 1093px){
        padding: 16px 40px;
    }

    @media (max-width: 680px){
        flex-direction: column-reverse; 
        webkit-align-items: flex-start;
        align-items: flex-start;

        p{
            font-size: 12px;
            line-height: 15px;
        }

        div{
            justify-content: flex-start;
        }

        div img{
            width: 5%;
        }
    }

    @media (max-width: 360px){

        p{
            font-size: 7px;
            line-height: 15px;
        }
    }

    @media (max-width: 100px){
        padding: 8px 10px;

        p{
            font-size: 4px;
            line-height: 10px;
        }  

        div{
            gap: 2px;
        }
    }
`

const Footer = () => {
  return (
    <FooterWrapper id='footer'>
        <p>Copyright 2021, Cryptous</p>

        <div>
            <img src={FacebookIcon} alt='facebook icon'></img>
            <img src={TwitterIcon} alt='twitter icon'></img>
            <img src={LinkedInIcon} alt='linkedin icon'></img>
            <img src={InstagramIcon} alt='instagram icon'></img>
        </div>
    </FooterWrapper>
  )
}

export default Footer