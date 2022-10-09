import React, { useEffect } from 'react'
import styled from 'styled-components'
import video1 from '../Assets/Animation1.mp4'
import video2 from '../Assets/Animation2.mp4'
import video3 from '../Assets/Animation3.mov'
import video4 from '../Assets/Animation4.mp4'

const VideosWrapper = styled.section`
    padding: 136.57px;

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
        margin-bottom: 4em;
    }

    .row-bottom{
        display: flex;
        align-items: center;
    }

    .row-top > :first-child, .row-bottom > :first-child{
        margin-right: 6em;
    }

    .center-wrapper{
        display: flex;
        justify-content: center;
    }

    @media (max-width: 768px){
        .row-top, .row-bottom{
            display: block;
        }
    }

`

const Videos = () => {

    useEffect(() => {
      
        const videos = document.querySelectorAll('video');
        
        videos.forEach(video => video.addEventListener('mouseenter', (e) => e.target.play()))
        videos.forEach(video => video.addEventListener('mouseout', (e) => e.target.pause() ))
        
    })
    
  return (
    <VideosWrapper>
        <div className='center-wrapper'>
            <div className='row-top'>
                <div>
                    <video src={video1} alt='video' width="570px" height="480px" muted="muted" loop></video>
                    <h3>User interface</h3>
                    <p>With our experienced team of professionals, you can expect sound ideas and solutions in a short term.</p>
                </div>
                <div>
                    <video src={video2} alt='video' width="570px" height="480px" muted="muted" loop ></video>
                    <h3>User interface</h3>
                    <p>With our experienced team of professionals, you can expect sound ideas and solutions in a short term.</p>
                </div>
            </div>
        </div>
        <div className='center-wrapper'>
            <div className='row-bottom'>
                <div>
                    <video src={video3} alt='video' width="570px" height="480px" muted="muted" loop></video>
                    <h3>User interface</h3>
                    <p>With our experienced team of professionals, you can expect sound ideas and solutions in a short term.</p>
                </div>
                <div>
                    <video src={video4} alt='video' width="570px" height="480px" muted="muted" loop></video>
                    <h3>User interface</h3>
                    <p>With our experienced team of professionals, you can expect sound ideas and solutions in a short term.</p>
                </div>
            </div>
        </div>
    </VideosWrapper>
  )
}

export default Videos