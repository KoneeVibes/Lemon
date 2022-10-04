import React from 'react'
import styled from 'styled-components'
import BackgroundStars from '../Assets/BackgroundStars.png'
import ActionStatementIllustration from '../Assets/ActionStatementIllustration.png'
import JoinNowLogo from '../Assets/JoinNowLogo.png'

const ActionStatementWrapper = styled.div`

    margin: 136.57px 144px;
    margin-top: -103.43px;

    .action-statement-box{
      padding: 4em;
      background-image: url(${BackgroundStars}), linear-gradient(261.11deg, #C000F8 1.9%, #5413C1 49.69%, #231656 79.41%);
      border-radius: 41px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .join-now-logo{
      position: relative;
      bottom: -6.5em;
      left: -5.5em;
    }

    .action-statement{
        font-family: Poppins;
        font-size: 25px;
        font-weight: 600;
        line-height: 38px;
    }

`

const ActionStatement = () => {

  return (
    <ActionStatementWrapper id='about-us'>
          <img src={JoinNowLogo} alt='join now logo' className='join-now-logo'></img>
          <div className='action-statement-box'>
            <h3 className='action-statement'>As a team, we truly believe in the concept of complete decentralisation and giving the power back to the user. That’s how the Internet was meant to be! We’re always excited to work with ambitious companies in the web3 space and help them bring their products to the next level. We’ve delivered a number of crypto, NFT, and blockchain projects, so we’ve been labeled a crypto design agency that “gets it”.</h3>
            <img src={ActionStatementIllustration} alt='action statement illustration'></img>
          </div>
    </ActionStatementWrapper>
  )
}

export default ActionStatement