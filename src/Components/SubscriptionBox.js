import React, { useEffect } from 'react'
import styled from 'styled-components'
import ConvertKitForm from 'convertkit-react'

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

    .form{
        margin: 0 431px;
        border: 2px solid #FFFFFF;
        border-radius: 37px; 
        padding-left: 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .form input{
        background: #020203;
        border: none;
        height: 18px;
        width: 75%;
        color: #FFFFFF;
        outline: none;
    }

    .form button{
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

    #ck-first-name {
        display:none;
    }

    #ck-email {
        font-family: Inter;
        font-size: 15px;
        font-weight: 400;
        line-height: 18px;
    }

`

const SubscriptionBox = () => {

    const MY_FORM_ID = 3677346
    // const MY_FORM_ID = `${process.env.REACT_APP_CONVERTKIT}`
    console.log(MY_FORM_ID)

    const config = {
        formId: MY_FORM_ID,
        emailPlaceholder: 'Enter your email address',
    }

    window.onload = function () {
        if (!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    }

    useEffect(() => {

        const standardText = document.querySelector('.width').textContent;
        const inputBox = document.querySelector('.form');

        function displayTextWidth(text, font) {
            let canvas = displayTextWidth.canvas || (displayTextWidth.canvas = document.createElement("canvas"));
            let context = canvas.getContext("2d");
            context.font = font;
            let metrics = context.measureText(text);
            inputBox.style.width = metrics.width + "px"
            return metrics.width;
        }

        displayTextWidth(standardText, "24px Inter")
        
    })

    return (
        <SubscriptionBoxWrapper id='newsletter-subscription'>
            <div>
                <h2>Never miss a drop</h2>
                <p className='width'>Subscribe for the latest news, drops & collectibles</p>
                <ConvertKitForm formId={MY_FORM_ID} className='form' {...config} />
            </div>
        </SubscriptionBoxWrapper>
    )
}

export default SubscriptionBox