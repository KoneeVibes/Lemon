import React from 'react'
import styled from 'styled-components'
import StartBuildingButton from './StartBuildingButton'

const ActionWrapper = styled.div`
    background: #5413C1;
    border-radius: 16px;
    margin: 0 144px;
    padding: 2em 4em;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2{
        font-family: Clash Display;
        font-size: 45px;
        font-weight: 600;
    }
    
`

const Action = () => {
  return (
    <ActionWrapper>
        <h2>Workshop with experts</h2>
        <div>
            <p>With our experienced team of professionals, you can expect sound ideas and solutions in a short term.</p>
            <StartBuildingButton text={'START BUILDING'}/>
        </div>
    </ActionWrapper>
  )
}

export default Action