import React from 'react'
import styled from 'styled-components'
import { InlineWidget } from "react-calendly";

const BookSessionWrapper = styled.div`
    padding: 136.57px;
    display: flex;
    padding-bottom: 0;

    h2{
        font-family: Clash Display;
        font-size: 45px;
        font-weight: 600;
        line-height: 50px;
        margin-block-start: 0;
    }

    .text-content p{
        font-family: Inter;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
    }

    .text-content{
        flex: 55%;
        margin-right: 4em;
    }

    .calendly-booking{
        flex: 45%;
        position: relative;
        opacity: 0.8;
    }

    p{
        font-family: Inter;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
    }

    @media (max-width: 1093px){
        flex-direction: column;
        gap: 3em;
        padding: 100px;
        padding-bottom: 0;
        

        .text-content{
            position: relative;
            // right: 6em;
        }

    }

    @media (min-width: 680px){

    }

    @media (max-width: 680px){

        padding: 50px 70px 0px;

        h2{
            font-size: 20px;
            line-height: 29px;
        }

        .text-content p{
            font-size: 10px;
            line-height: 20px;
        }

        .text-content{
            margin-right: 0;
        }

        .calendly-booking{
            display: flex;
            justify-content: center;
        }

    }

    @media (min-width: 340px) and (max-width: 470px){
        padding: 100px 40px 0px;
    }

    @media (max-width: 340px){
        display: none;
    }

`

const BookSession = () => {

    const CALENDLY = process.env.REACT_APP_CALENDLY;

  return (
    <BookSessionWrapper id='book-a-session'>
        <div className='text-content'>
            <h2>Still not sure? book a demo and see if it’s we’re a fit!</h2>
            <p>By the end of this audit call, you will have a clear understanding of the next steps you can take for your business to build and scale a human-centric product . </p><p>Find a time on Lemon’s (our creative director) calendar to schedule your call today and we look forward to speaking to you soon!</p>
        </div>

        <div className='calendly-booking'>
            <InlineWidget url={CALENDLY} id='test'/>
        </div>
    </BookSessionWrapper>
  )
}

export default BookSession