import React from 'react'
import styled from 'styled-components'

import { media } from '../../layouts'

import Reserve from '../../img/papa_reserve.png'
import Book from '../../img/purpose_graphics/book.svg'
import Note from '../../img/purpose_graphics/song-note.svg'
import Island from '../../img/purpose_graphics/sun_mountains.svg'
import Think from '../../img/purpose_graphics/think.svg'


const Container = styled.div`
padding-top: 100px;
max-width: 1000px;
display: flex;
flex-direction: column;
justify-items: center;
margin: auto;
text-align: center;
font-size: 1.5em;

${media.phone`
padding-top: 55px;
`}

p {
 text-align: justify;
}
`;

const PurposeInfo = styled.div`
img {
  width: 75%;
  margin: auto;
}

${media.phone`

    p { 
        margin: 15px 25px;
    }
`}
`;

/* TODO mixin for IE properties */

const PurposeList = styled.div`
display: flex;
flex-direction: column;
max-width: 875px;
margin: auto;


@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
     width: 875px;
}


div {
  display: flex;
  text-align: left;
  align-items: center;
  margin: 5px 0;
  font-size: .75em;
  
  ${media.phone`


    p { 
        margin: 0 15px;
    }
    `}
}

`;

const Icon = styled.div`
min-width: 120px;
height: 120px;

img {
  width: 55%;
  margin: auto;
}

`;

const Purpose = () => (
    <Container id='purpose'>
        <PurposeInfo>
            <h1>Song Purpose</h1>
            <img src={Reserve}/>
            <p>To help people learn the name and important aspects of Papahānaumokuākea,
                the Northwest Hawaiian Islands and surrounding ocean area recently
                dedicated as a Marine National Monument.
            </p>
        </PurposeInfo>
        <PurposeList>
            <div>
                <Icon>
                    <img src={Island} alt="Island"/>
                </Icon>
                <p>The name acknowledges the union of the Hawaiian entities Papa (Earth mother)
                    and Wākea (sky father) who birthed the Hawaiian Islands.</p>
            </div>
            <div>
                <Icon>
                    <img src={Think} alt="Thinking"/>
                </Icon>
                <p>The name is somewhat long and takes effort to remember, especially for people who don't speak
                    Hawaiian.
                    The initial goal of this song project is to help people to learn and remember the name after hearing
                    the song for the first time.</p>
            </div>
            <div>
                <Icon>
                    <img src={Note} alt="Note"/>
                </Icon>
                <p>We can help make it easy to learn and remember with a catchy song. The song is geared for
                    children but meant for adults as well.
                </p>
            </div>
            <div>
                <Icon>
                    <img src={Book} alt="Book"/>
                </Icon>
                <p>A coloring book can illustrate the information with the song as its text. The song and
                    coloring book text can be written in English and ‘Ōlelo Hawai‘i (Hawaiian Language).
                </p>
            </div>
        </PurposeList>


    </Container>
);

export default Purpose;