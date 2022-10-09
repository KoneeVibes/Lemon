import React from 'react'
import styled from 'styled-components'
import LemonLogo from '../Assets/LemonLogo.png'
import ElectricalCapitalLogo from '../Assets/ElectricCapitalLogo.png'
import RabbitHoleLogo from '../Assets/RabbitHoleLogo.png'

const TrustedPartnersWrapper = styled.div`
    padding: 0 136.57px;

    .logos{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .logos img{
        margin-right: 5px;
    }

    h4{
        font-family: Clash Display;
        font-size: 27px;
        font-weight: 500;
        line-height: 33px;
    }

    @media (max-width: 420px){
        padding: 0 40px;
    }
`

const TrustedPartners = () => {

  return (
    <TrustedPartnersWrapper>
        <h4>Trusted by 150+ companies</h4>
        <div className='logos'>
            <img src={LemonLogo} alt='Logo of Lemon'></img>
            <img src={ElectricalCapitalLogo} alt='Logo of Lemon'></img>
            <img src={RabbitHoleLogo} alt='Logo of Lemon'></img>
            <img src={LemonLogo} alt='Logo of Lemon'></img>
            <img src={ElectricalCapitalLogo} alt='Logo of Lemon'></img>
            <img src={RabbitHoleLogo} alt='Logo of Lemon'></img>
            <img src={LemonLogo} alt='Logo of Lemon'></img>
            <img src={LemonLogo} alt='Logo of Lemon'></img>
            <img src={ElectricalCapitalLogo} alt='Logo of Lemon'></img>
        </div>
    </TrustedPartnersWrapper>
  )
}

export default TrustedPartners