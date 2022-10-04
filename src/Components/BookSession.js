import React from 'react'
import styled from 'styled-components'

const BookSessionWrapper = styled.div`
    padding: 136.57px;
    display: flex;

    h2{
        font-family: Clash Display;
        font-size: 50px;
        font-weight: 600;
        line-height: 50px;
    }

    .text-content p{
        font-family: Inter;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
    }

    .text-content{
        flex: 55%;
    }

    .calendly-booking{
        flex: 45%;
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
            <h3>Monday</h3>
            <p>November 21, 2022</p>
        </div>
    </BookSessionWrapper>
  )
}

export default BookSession