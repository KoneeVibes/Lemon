import React from 'react'
import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'

const Button = styled.button`
    width: 222px;
    height: 57px;
    border: none;
    border-radius: 54px;
    background: #020203;
    color: #FFFFFF;
    font-family: Clash Display;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;

    a{
      text-decoration: none;
      color: #FFF;
    }
`

const StartBuildingButton = ({text}) => {
  return (
      <HashLink to='#book-a-session' smooth><Button>{text}</Button></HashLink>
  )
}

export default StartBuildingButton