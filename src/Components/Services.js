import React from 'react'
import styled from 'styled-components'

const ServicesWrapper = styled.div`

    padding: 136.57px;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;

    h2{
        font-family: Poppins;
        font-size: 26px;
        font-weight: 700;
    }

    p{
        font-family: Poppins;
        font-size: 17px;
        font-weight: 400;
        color: #FFFFFF6B;
    }

    div{
        width: 300px;
        margin-left: 10px;
    }

`

const Services = () => {
  return (
    <ServicesWrapper>
        <div>
            <h2>Product design</h2>
            <p>With our experienced team of professionals, you can expect sound ideas and solutions in a short term.</p>
        </div>

        <div>
            <h2>Brand Identity Design</h2>
            <p>With our experienced team of professionals, you can expect sound ideas and solutions in a short term.</p>
        </div>

        <div>
            <h2>NFT collections</h2>
            <p>With our experienced team of professionals, you can expect sound ideas and solutions in a short term.</p>
        </div>

        <div>
            <h2>User interface</h2>
            <p>With our experienced team of professionals, you can expect sound ideas and solutions in a short term.</p>
        </div>

        <div>
            <h2>Social Media</h2>
            <p>With our experienced team of professionals, you can expect sound ideas and solutions in a short term.</p>
        </div>

        <div>
            <h2>Motion Graphics</h2>
            <p>With our experienced team of professionals, you can expect sound ideas and solutions in a short term.</p>
        </div>

        <div>
            <h2>Copy writing </h2>
            <p>With our experienced team of professionals, you can expect sound ideas and solutions in a short term.</p>
        </div>
    </ServicesWrapper>
  )
}

export default Services