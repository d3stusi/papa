import React from 'react'
import styled from 'styled-components'

import SignUp from '../SignUp'
import { media } from '../../layouts'

import Film from '../../img/camera.png'
import Strip from '../../img/film_strip.svg'
import Download from '../../img/download.png'


const Container = styled.div`
display: flex;
flex-flow: column;
text-align: center;
margin: 0 auto 25px auto;
padding-top: 100px;

${media.phone`
    padding-top: 55px;
`}

img {
width: 200px;
}
`;

const Description = styled.div`
display: flex;
max-width: 1120px;
margin: 0 auto;

${media.phone`
flex-flow: column;

    div {
        margin: 13px auto !important;
        width: 85% !important;
    }

    embed {
        width: 125px !important;
    }
`}



div {
width: 40%;
margin: 30px 50px;
}

embed {
width: 200px;
}
`

const Awards = styled.div`
display: flex;
text-align: left;
justify-content: center;
align-items: center;
margin: 30px auto;
flex-flow: column;

${media.phone`
margin: 15px !important;
`}


li {
margin-bottom: 0.325rem;
}
`

// TODO IE fix

const Supplemental = styled.div`
display: flex;
justify-content: center;
align-items: center;
div {
  display: flex;
  align-items: center;
  margin: auto;

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
     margin: 0;
  }


  img {
  width: 50px;
  margin-right: 10px;
  }
}

`


const Contest = () => (
    <Container id='contest'>
        <div>
            <a name = "video"></a>
            <img src={Film} />
            <h1>Music Video Send-In</h1>
            <Description>
                <div>
                    <embed src={Strip} />
                    <p>Film your group performing a song about
                    Papahānaumokuākea.</p>
                </div>
                <div>
                    <embed src={Strip} />
                    <p>Sing the song as written, remix it or create your very own.
                    We’ll provide the  art and photos. How about a May Day performance?
                    </p>
                </div>
            </Description>
            {/*<Awards>*/}
                {/*<h2>You could win:</h2>*/}
                {/*<ul>*/}
                    {/*<li><u>Papahānaumokuākea</u> Bumper Sticker for each participant!</li>*/}
                    {/*<li>Beautiful Archival Song Lyric Sheet.</li>*/}
                    {/*<li>HD Digital Color book Art (Colorbook release <u>to be announced.</u>)</li>*/}
                    {/*<li>Credits on PapahanaumokuakeaSong.com Website and Facebook Page. You’re famous!</li>*/}
                    {/*<li>Downloadable Song short and long versions by Kawika Kahiapo, including instrumental versions!</li>*/}
                    {/*<li>Inclusion in the upcoming Papahānaumokuākea Music Album.</li>*/}
                    {/*<li>Inclusion in an upcoming television show.</li>*/}
                    {/*<li>More Prizes will be getting added to this list as we go.</li>*/}
                {/*</ul>*/}
            {/*</Awards>*/}
            <Supplemental>
                {/*<div>*/}
                    {/*<img src={Download} />*/}
                    {/*<p>Graphics and Song</p>*/}
                {/*</div>*/}
                <div>
                    <SignUp/>
                </div>
            </Supplemental>
        </div>
    </Container>
)

export default Contest
