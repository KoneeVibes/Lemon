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

    @media(max-width: 1440px){
        overflow-X: hidden;
    }

    @media(max-width: 420px){

        h2{
            font-size: 30px;
            line-height: 50px;
        }

        p{
            font-size: 12px;
            line-height: 28px;
        }

    }

`

const SubscriptionBox = () => {

    const MY_FORM_ID = parseFloat(`${process.env.REACT_APP_CONVERTKIT}`)

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
        const fontSize = getComputedStyle(document.querySelector('.width')).fontSize;
        const font = getComputedStyle(document.querySelector('.width')).fontFamily;
        const inputBox = document.querySelector('.form');

        function displayTextWidth(text, font) {
            let canvas = displayTextWidth.canvas || (displayTextWidth.canvas = document.createElement("canvas"));
            let context = canvas.getContext("2d");
            context.font = font;
            let metrics = context.measureText(text);
            inputBox.style.width = metrics.width + "px";
            return metrics.width;
        }

        displayTextWidth(standardText, `${fontSize} ${font}`)
        
    })

    return (
        <SubscriptionBoxWrapper id='newsletter-subscription'>
            <div>
                <h2>Never miss a drop</h2>
                <p className='width'>Subscribe for the latest news, drops & collectibles</p>
                <ConvertKitForm formId={MY_FORM_ID} className='form' {...config}/>
            </div>
        </SubscriptionBoxWrapper>
    )
}

export default SubscriptionBox