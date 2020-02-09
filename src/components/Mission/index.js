import React from 'react'
import styled from 'styled-components'
import DreamsPainting from '../../img/dreams_of_paradise.jpg'

import { media } from '../../layouts'

import File from '../../img/doc.svg'
import ReleaseDoc from '../../data/press_release.pdf'
import Film from '../../img/camera.png'


const Container = styled.div`
padding: 100px 25px 0 25px;
margin: 155px auto;
display: flex;
max-width: 1200px;
justify-content: space-around;
align-items: center;

a{
color: white;
text-decoration: none;
}

${media.phone`
flex-flow: column-reverse;
justify-content: center;
padding-top: 55px;

div { 
    padding: 5px !important;
    margin: auto;
    h1 {
        font-size: 1.5em !important;
    }
    
    p {
        font-size: 1em !important;
    }
}

`}

div {
    padding: 20px;
  
  h1 {
  margin-bottom: 4px;
  }
  
  hr {
  border-bottom: 3px solid #fff;
  width: 270px;
  margin-right: auto;
  }
  
  p {
  font-size: 1.5em;
  max-width: 555px;
  }
  
}
`

const PressRelease = styled.div`
    cursor: pointer;
    margin-left: 0px !important;
    
    :hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
    }
    
    p {
      position: relative;
    }
    embed {
      position: absolute;
      bottom: 0;
      right: 5px;
      width: 58px;
      z-index: -1000;
      
        @media (max-width: 1090px) {
          bottom: 33px;
          right: 18px;
          width: 46px;
        }
      
        ${media.phone`
            width: 26px;
            bottom: 52px;
        `}
    }
`;

const Painting = styled.img`
  object-fit: cover;
  width: 100%;
  min-width: 400px;
  border: 3px solid #fff;
  margin-bottom: 0;
  width: 420px;
  height: 330px;
  
  ${media.phone`
    width: 70%;
    min-width: unset;
    height: unset;
    margin: auto;
    `}
`;

const VideoBlock = styled.div`
margin-left: 0px !important;
position: relative;
padding-top: 26px;
cursor: pointer;


 :hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
    }

img {
  width: 100px;
  position: absolute;
  right: 0;
  top: 31px;
  z-index: -1000;
  
  @media (max-width: 950px) {
      top: 85px;
  }
  
  ${media.phone`
      right: 106px;
      top: 47px;
  `}
  
}

`


const Mission = (props) => (
    <Container id="mission">
        <div>
            <div>
                <h1>Our mission</h1>
                <hr />
                <p>To spread the aloha for
                    Papahānaumokuākea that will help to protect and preserve it.
                </p>
            </div>
            <PressRelease onClick={() => window.open(`${ReleaseDoc}`)}>
                <h1 >Press Release</h1>
                <hr />
                <p>Download our project info document.
                    <span >
                        <embed src={File}/>
                    </span>
                </p>
            </PressRelease>
            <a target="_blank" href="https://vimeo.com/262913637">
            <VideoBlock onClick={props.stopPlaying}>
                <h1>See our video</h1>
                <hr />
                <img src={Film} />
            </VideoBlock></a>
        </div>
        <div>
            <Painting src={DreamsPainting} />
        </div>
    </Container>
    );

export default Mission