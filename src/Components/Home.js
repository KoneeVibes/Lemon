import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import HeaderIllustrationI from '../Assets/HeaderIllustrationI.png'

const HomeWrapper = styled.div`
    background: #171717;
`

const Home = () => {
  return (
    <HomeWrapper>
          <Header mainText={'The future of blockchain design'} subText={'A design agency creating social media designs/animated contents for Blockchain projects across the world'} illustration = {HeaderIllustrationI}/>
    </HomeWrapper>
  )
}

export default Home