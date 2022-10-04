import React from 'react'
import styled from 'styled-components'
import Header from '../Components/Header'
import ActionStatementIllustration from '../Assets/ActionStatementIllustration.png'
import MarqueeContainer from '../Components/MarqueeContainer'

const ProjectsWrapper = styled.div`
    background: #020203;
`

const Projects = () => {
  return (
    <ProjectsWrapper>
          <Header mainText={'Designing for humans to help brands grow.'} subText={'A design agency creating social media designs/animated contents for Blockchain projects across the world'} illustration={ActionStatementIllustration}/>
          <MarqueeContainer bgColor={'#1B1232'} />
    </ProjectsWrapper>
  )
}

export default Projects