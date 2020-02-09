import React from 'react'
import styled from 'styled-components'
import { media } from '../../layouts'

import Main from '../../img/main.jpg'
import Papa from '../../img/PAPAHANAUMOKUAKEA.svg'
import Background from '../../img/background_painting.svg'
import Wavy from '../../img/wavy_music_sheet.png'


const Container = styled.div`
text-align: center;
height: 100vh;
padding-top: 35px;
margin-bottom: 30px;

${media.phone`
z-index: -3333;
position: relative
padding-top: 60px;
`}

embed {
position: absolute;
}
`;

const Painting = styled.div`
margin: 0 auto;
height: 70vh;
background: url('${Wavy}') no-repeat center;
background-position-y: 288px;
background-size: 113%;

//calculate for narrow screen
@media (max-height: 920px) {
        background-position-y: 250px;
        img {
         width: 60vw;
        }
      }

${media.desktop`
img {
    max-width: 70%;
}
`}

img {
object-fit: cover;
max-width: 80%;
height: 70vh;
border: solid #ffb347 3px;
border-radius: 2px;
}
`;


const PapaHeading = styled.div`
background: url("${Papa}") no-repeat center;
background-size: contain;

${media.desktop`
h1 {
}
`}

h1 {
opacity: 0;
font-size: 10vh;
margin-bottom: 20px;

  @media (max-width: 1370px) {
        font-size: 7vh;
      }
   
   ${media.desktop`
        font-size: 5vh;
    `}

}

`;

const PapaSubheading = styled.div`

${media.tablet`

p:first-of-type {
    font-size: 2.5vh !important;
    margin-bottom: 3px !important;
}

p:last-of-type {
    font-size: 1.5vh !important;
}

`}

${media.desktop`

p:first-of-type {
    font-size: 3.5vh;
    margin-bottom: 12px;
}

p:last-of-type {
    font-size: 2.5vh !important;
    padding: 3px 50px !important;
}

`}

p:first-of-type {
  font-family: "Comic Sans MS", Arial, sans-serif;
  font-style: italic;
  font-size: 4.5vh;
  font-weight: 900;
  color: #fff;
  margin-bottom: 18px;
}
p:last-of-type {
  color: #fff;
  font-size: 2.7vh;
  font-weight: 600;
  font-family: "Arial", Arial, sans-serif;
  }
`;

const Title = () => (
    <Container id="#t">
        <Painting>
            <img src={Main} />
        </Painting>
        <PapaHeading>
            <h1>Papahānaumokuākea</h1>
        </PapaHeading>
        <PapaSubheading>
            <p>Sacred Places Need Our Kay-yah!</p>
            <p>Papahānaumokuākea Song and coloring book project</p>
        </PapaSubheading>
    </Container>
);

export default Title;
