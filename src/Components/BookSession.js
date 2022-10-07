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

`

const BookSession = () => {
  return (
    <BookSessionWrapper id='book-a-session'>
        <div className='text-content'>
            <h2>Still not sure? book a demo and see if it’s we’re a fit!</h2>
            <p>By the end of this audit call, you will have a clear understanding of the next steps you can take for your business to build and scale a human-centric product . </p><p>Find a time on Lemon’s (our creative director) calendar to schedule your call today and we look forward to speaking to you soon!</p>
        </div>

        <div className='calendly-booking'>
            <InlineWidget url="https://calendly.com/lemondesigns86/30min" />
        </div>
    </BookSessionWrapper>
  )
}

export default BookSession