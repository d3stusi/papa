import React from 'react'
import styled from 'styled-components'

import PIPLogo from '../../img/pip_logo.png'
import Fish from '../../img/fish.png'
import GoFundMeImg from '../../img/gofundme.png'
import ColoringBookFlyer from '../../img/coloring_book_flyer.jpg'

const Container = styled.div`
display: flex;
justify-content: center;
flex-flow: column;
`

const WorkInProgress = styled.div`
text-align: center;
margin: 20px;
h1 {
font-size: 1.5em;
}
`

const Adverts = styled.div`
display: flex;
justify-content: center;

@media (max-width: 850px) {
  flex-flow: column;
  align-items: center;
}

img {
  width: 180px;
  height: 130px;
  margin: 10px;
  object-fit: contain;
}
`

const Description = styled.div`
display: flex;
justify-content: center;
flex-flow: column;

@media (max-width: 850px) {
  h2 {
    font-size: 1em;
  }

  p {
    font-size: 0.8em;
  }
}

`

const Single = styled.div`
display: flex;
margin: 20px;
background-color: ${props => props.background};
color: #000;
padding: 20px;
border-radius: 33px;

:hover {
  cursor: pointer;
}

@media (max-width: 850px) {
  width: 345px;
}

`

const Banner = () => (
  <Container>
    <WorkInProgress>
      <h1>This website is a work in progress</h1>
    </WorkInProgress>
    <Adverts>
        <Single
            background="#71DFC0"
            onClick={() => window.open('https://www.gofundme.com/papahanaumokuakea-song-n-color-book')}
        >
            <img src={GoFundMeImg}/>
            <Description>
                <h2>Join our</h2>
                <h2>Fundraising efforts</h2>
                <p>Click here for more info</p>
            </Description>
        </Single>
        <Single
            background="#1EB1F3"
            onClick={() => window.open('https://youtu.be/S36BuGngZjc')}
        >
            <img src={PIPLogo}/>
            <Description>
                <h2>TV Show Premiere</h2>
                <h2>May 25 2018</h2>
                <p>Watch online here!</p>
            </Description>
        </Single>
        {/*<Single background="#1EB1F3">*/}
            {/*<img src={Fish}/>*/}
            {/*<Description>*/}
                {/*<h2>Aquarium Event</h2>*/}
                {/*<h2>June 10 2018</h2>*/}
                {/*<p>Click here for more info</p>*/}
            {/*</Description>*/}
        {/*</Single>*/}
        <Single>
        <img src={ColoringBookFlyer}/>
        </Single>
    </Adverts>
  </Container>
);

export default Banner
