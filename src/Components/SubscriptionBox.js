import React, { useEffect } from 'react'
import styled from 'styled-components'

const SubscriptionBoxWrapper = styled.div`

    text-align: center;
    display: flex;
    justify-content: center;

    h2{
        font-family: Clash Display;
        font-size: 50px;
        font-weight: 600;
        margin-block-end: 0;
    }

    .input-box{
        margin: 0 431px;
        border: 2px solid #FFFFFF;
        border-radius: 37px; 
        padding-left: 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .input-box input{
        background: #020203;
        border: none;
        height: 18px;
        width: 75%;
        color: #FFFFFF;
        outline: none;
    }

    .input-box button{
        background: #EB5757;
        border-radius: 31px;
        padding: 10px 26.5px;
        font-family: Poppins;
        font-size: 17px;
        font-weight: 500;
        line-height: 24px;
        color: #FFFFFF;
    }

    p{
        font-family: Inter;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
    }

`

const SubscriptionBox = () => {

    useEffect(() => {

        const standardText = document.querySelector('.width').textContent;
        const inputBox = document.querySelector('.input-box');
      
        function displayTextWidth(text, font) {
            let canvas = displayTextWidth.canvas || (displayTextWidth.canvas = document.createElement("canvas"));
            let context = canvas.getContext("2d");
            context.font = font;
            let metrics = context.measureText(text);
            inputBox.style.width = metrics.width + "px"
            return metrics.width;
        }

        displayTextWidth(standardText, "24px Inter"); 
    })
    
  return (
    <SubscriptionBoxWrapper>
        <div>
            <h2>Never miss a drop</h2>
            <p className='width'>Subscribe for the latest news, drops & collectibles</p>
            <div className='input-box'>
                <input placeholder='Enter your email address '></input>
                <button>Subscribe</button>
            </div>
        </div>
    </SubscriptionBoxWrapper>
  )
}

export default SubscriptionBox