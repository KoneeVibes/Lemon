import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '../Assets/FacebookIcon.svg'
import TwitterIcon from '../Assets/TwitterIcon.svg'
import LinkedInIcon from '../Assets/LinkedInIcon.svg'
import InstagramIcon from '../Assets/InstagramIcon.svg'

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

    div img:hover{
        background: #EB5757; 
    }

    img{
        border-radius: 10px
    }

    @media (max-width: 1093px){
        padding: 40px;
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
            gap: 0.4em;
            padding: 1em 0;
        }
    }

    @media (max-width: 360px){

        padding: 25px 40px;

        p{
            font-size: 10px;
            line-height: 15px;
        }

        a img{
            width: 50%;
        }

        div{
            gap: 0;
            padding: 0.5em 0;
        }
    }

    @media (max-width: 100px){
        padding: 8px 10px;

        p{
            font-size: 4px;
            line-height: 10px;
        }  
    }
`

const Footer = () => {
  return (
    <FooterWrapper id='footer'>
        <p>Copyright 2021, Cryptous</p>

        <div>
            <a href='https://www.facebook.com/'><img src={FacebookIcon} alt='facebook icon'></img></a>
            <a href='https://twitter.com/UmorenOfofonono'><img src={TwitterIcon} alt='twitter icon'></img></a>
            <a href='https://www.linkedin.com/in/ofofonono-umoren-220b11158/'><img src={LinkedInIcon} alt='linkedin icon'></img></a>
            <a href='https://www.instagram.com/ofofon_umoren/'><img src={InstagramIcon} alt='instagram icon'></img></a>
        </div>
    </FooterWrapper>
  )
}

export default Footer