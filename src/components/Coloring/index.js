import React from 'react'
import styled from 'styled-components'
import ColorCover from '../../img/ColorCover.jpg'

import { media } from '../../layouts'

import File from '../../img/doc.svg'
import ReleaseDoc from '../../data/ColoringPages.pdf'
import Film from '../../img/camera.png'


const Container = styled.div`
padding: 0px 25px 0 25px;
margin: auto;

display: flex;
max-width: 1200px;
justify-content: space-around;
align-items: center;

a{
color: #f48df7;
text-decoration: none;
}

${media.phone`
flex-flow: column-reverse;
justify-content: center;
padding-top: 0px;

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
  font-size: 1em;
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
                <h1>Download the Free Papahānaumokuākea Song Coloring Book</h1>

                <p> The Papahānaumokuākea Coloring Book is a Work In Progress. Here are the initial coloring book pages and more are coming as we illustrate the long version of the song that includes the atolls. Feel Free to share it, print it, sing it, and use it to teach and enjoy.
                </p>
            </div>
            <a href="https://www.bitsofaloha.com/ColoringBookPages.pdf">
            <PressRelease>
                <h3 >Download Coloring Book</h3>
                <hr />
                <p>Download all 12 coloring book pages free!
                    <span >
                        <embed src={File}/>
                    </span>
                </p>
            </PressRelease>
            </a>

        </div>
        <div>
            <a href="https://www.bitsofaloha.com/ColoringBookPages.pdf">
            <Painting  src={ColorCover}  />
            </a>
        </div>
    </Container>
    );

export default Mission
