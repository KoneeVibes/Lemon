import React from 'react'
import styled from 'styled-components'
import Header from '../Components/Header'
import ActionStatementIllustration from '../Assets/ActionStatementIllustration.png'
import MarqueeContainer from '../Components/MarqueeContainer'
import Videos from '../Components/Videos'
import Action from '../Components/Action'
import ProjectsActionBorder from '../Assets/ProjectsActionBorder.png'
import SubscriptionBox from '../Components/SubscriptionBox'
import BookSession from '../Components/BookSession'
import Footer from '../Components/Footer'

const ProjectsWrapper = styled.div`
    background: #020203;
`

const Projects = () => {
  return (
    <ProjectsWrapper>
      <Header mainText={'Designing for humans to help brands grow.'} subText={'A design agency creating social media designs/animated contents for Blockchain projects across the world'} illustration={ActionStatementIllustration} padding={(window.screen.availWidth >= 1440) ? '90px 0 30px 0' : "30px 0"} />
          <MarqueeContainer bgColor={'#1B1232'} />
          <Videos/>
          <Action bgColor={'#FFFFFF'} src={ProjectsActionBorder} color={'#020203'}/>
          <SubscriptionBox/>
          <BookSession/>
          <MarqueeContainer/>
          <Footer/>
    </ProjectsWrapper>
  )
}

export default Projects