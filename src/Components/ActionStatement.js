import React from 'react'
import styled from 'styled-components'
import BackgroundStars from '../Assets/BackgroundStars.png'
import ActionStatementIllustration from '../Assets/ActionStatementIllustration.png'

const ActionStatementWrapper = styled.div`

    margin: 136.57px 144px;
    padding: 4em;
    background-image: url(${BackgroundStars}), linear-gradient(261.11deg, #C000F8 1.9%, #5413C1 49.69%, #231656 79.41%);
    border-radius: 41px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3{
        font-family: Poppins;
        font-size: 25px;
        font-weight: 600;
        line-height: 38px;
    }

    @media(max-width: 1440px){
        display: block;

        img{
          display: block;
          margin-left: auto;
          margin-right: auto;
          padding-top: 3em;
          height: auto;
          width: 70%;
        }
    }

    @media (min-width: 680px) and (max-width: 1093px){

      margin: 80px 70px;
      padding: 2em 3em;
      border-radius: 30px;

    }

    @media (min-width: 500px) and (max-width: 850px){

      padding: 2em 3em;
      border-radius: 20px;

      img{
        height: auto;
        width: 50%;
        padding-top: 2em;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      h3{
        font-size: 18px;
        font-weight: 500px;
      }
    }

    @media (max-width: 680px){
      margin: 60px 40px;
    }

    @media (max-width: 500px){

      padding: 2em 1em;
      border-radius: 10px;

      h3{
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
      }

      img{
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        padding-top: 1em;
      }

    }

    @media (max-width: 279px){
        margin: 0px 2px;
        padding: 8px;

        h3{
          font-size: 7px;
          line-height: 15px;
        }
    }

    @media (max-width: 100px){
        padding: 4px;

        h3{
          font-size: 4px;
          line-height: 6px;
        }
    }

`

const ActionStatement = () => {

  return (
    <ActionStatementWrapper id='about-us'>
            <h3>As a team, we truly believe in the concept of complete decentralisation and giving the power back to the user. That’s how the Internet was meant to be! We’re always excited to work with ambitious companies in the web3 space and help them bring their products to the next level. We’ve delivered a number of crypto, NFT, and blockchain projects, so we’ve been labeled a crypto design agency that “gets it”.</h3>
            <img src={ActionStatementIllustration} alt='action statement illustration'></img>
    </ActionStatementWrapper>
  )
}

export default ActionStatement