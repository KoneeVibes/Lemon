import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import HeaderIllustrationI from '../Assets/HeaderIllustrationI.png'
import MarqueeContainer from './MarqueeContainer'
import ActionStatement from './ActionStatement'
import TrustedPartners from './TrustedPartners'
import Services from './Services'
import Action from './Action'

const HomeWrapper = styled.div`
    background: #020203;
`

const Home = () => {
  return (
    <HomeWrapper>
          <Header mainText={'The future of blockchain design'} subText={'A design agency creating social media designs/animated contents for Blockchain projects across the world'} illustration = {HeaderIllustrationI}/>
          <MarqueeContainer/>
          <ActionStatement/>
          <TrustedPartners/>
          <Services/>
          <Action/>
    </HomeWrapper>
  )
}

export default Home