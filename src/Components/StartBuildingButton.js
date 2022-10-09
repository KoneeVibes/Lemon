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

    @media (max-width: 420px){
      font-size: 15px;
      line-height: 20px;
      border-radius: 50px;
      width: 126px;
      height: 30px;
    }

`

const StartBuildingButton = ({text}) => {
  return (
      <HashLink to='#book-a-session' smooth><Button>{text}</Button></HashLink>
  )
}

export default StartBuildingButton