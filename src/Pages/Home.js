import React from 'react'
import styled from 'styled-components'
import Header from '../Components/Header'
import HeaderIllustrationI from '../Assets/HeaderIllustrationI.png'
import MarqueeContainer from '../Components/MarqueeContainer'
import ActionStatement from '../Components/ActionStatement'
import TrustedPartners from '../Components/TrustedPartners'
import Services from '../Components/Services'
import Action from '../Components/Action'
import SubscriptionBox from '../Components/SubscriptionBox'
import BookSession from '../Components/BookSession'
import Footer from '../Components/Footer'
import HomeActionBorder from '../Assets/HomeActionBorder.png'

const HomeWrapper = styled.div`
    background: #020203;
`

const Home = () => {
  return (
    <HomeWrapper>
          <Header mainText={'The future of blockchain design'} subText={'A design agency creating social media designs/animated contents for Blockchain projects across the world'} illustration = {HeaderIllustrationI}/>
          <MarqueeContainer bgColor={'#1B1232'}/>
          <ActionStatement/>
          <TrustedPartners/>
          <Services/>
          <Action bgColor={'#5413C1'} src={HomeActionBorder} color={'#FFFFFF'}/>
          <SubscriptionBox/>
          <BookSession/>
          <MarqueeContainer/>
          <Footer/>
    </HomeWrapper>
  )
}

export default Home