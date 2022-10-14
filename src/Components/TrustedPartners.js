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

    .logos{
        gap: 1em;
    }

    h4{
        font-family: Clash Display;
        font-size: 27px;
        font-weight: 500;
        line-height: 33px;
    }

    @media (max-width: 1360px){

        .logos{
            gap: 0.8em;
        }

        .logos img{
            width: 30%;
            height: auto;
        }
    }

    @media (max-width: 1093px){
        padding: 0 70px;

        .logos{
            gap: 1em;
        }

        .logos img{
            width: 25%;
            height: auto;
        }

        h4{
            font-size: 25px;
            line-height: 30px;
        }
    }

    @media (min-width: 500px) and (max-width: 680px){
        padding: 0 40px;

        .logos{
            gap: 0.8em;
        }

        .logos img{
            width: 20%;
            height: auto;
        }

        h4{
            font-size: 23px;
            line-height: 28px;
        }
        
    }

    @media (max-width: 500px){
        padding: 0 40px;

        .logos{
            gap: 1em;
        }

        .logos img{
            width: 20%;
            height: auto;
        }

        h4{
            font-size: 20px;
            line-height: 25px;
        }
    }

    @media (max-width: 279px){
        display: none;
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