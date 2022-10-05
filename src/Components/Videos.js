import React from 'react'
import styled from 'styled-components'
import video1 from '../Assets/Video1.png'
import video2 from '../Assets/Video2.png'
import video3 from '../Assets/Video3.png'

const VideosWrapper = styled.section`
    padding: 75px;
    padding-bottom: 136.57px;

    h3{
        font-family: Poppins;
        font-size: 25px;
        font-weight: 600;
        line-height: 36px;
    }

    p{
        font-family: Poppins;
        font-size: 17px;
        font-weight: 400;
        line-height: 23px;
        color: #FFFFFF6B;
        width: 356px;
    }

    .row-top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 6em;
    }

    .row-bottom{
        display: flex;
        justify-content: space-between;
    }
`

const Videos = () => {
  return (
    <VideosWrapper>
        <div className='row-top'>
            <div>
                <img src={video1} alt='video'></img>
                <h3>User interface</h3>
                <p>With our experienced team of professionals, you can expect sound ideas and solutions in a short term.</p>
            </div>
            <div>
                <img src={video2} alt='video'></img>
                <h3>User interface</h3>
                <p>With our experienced team of professionals, you can expect sound ideas and solutions in a short term.</p>
            </div>
        </div>
        <div className='row-bottom'>
            <div>
                <img src={video3} alt='video'></img>
                <h3>User interface</h3>
                <p>With our experienced team of professionals, you can expect sound ideas and solutions in a short term.</p>
            </div>
            <div>
                <img src={video1} alt='video'></img>
                <h3>User interface</h3>
                <p>With our experienced team of professionals, you can expect sound ideas and solutions in a short term.</p>
            </div>
        </div>
    </VideosWrapper>
  )
}

export default Videos