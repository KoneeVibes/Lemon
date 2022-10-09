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
    }

    div img{
        margin-right: 1em;
    }

    @media (max-width: 420px){
        display: block;
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