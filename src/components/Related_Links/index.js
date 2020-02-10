import React from 'react'
import styled from 'styled-components'

import { media } from '../../layouts'


const Container = styled.div`
padding-top: 100px;
display: flex;
flex-flow: column;
align-items: center;
justify-items: center;

${media.phone`

padding-top: 55px;
width: 100%;
`}

h1 {
text-align: center;
}
`

const LinkList = styled.ul`
width: 80%;

${media.phone`
width: 100%;
`}

display: flex;
flex-direction: row;
flex-wrap: wrap;

  ${media.phone`
    flex-direction: column;
  `}
}
`

const LinkItem = styled.li`
cursor: pointer;
    display: flex;
    flex: 1 1 45%;
    background-color: ${props => props.color || `#ffb347;`};
    padding: 10px;
    margin: 20px 10px;
    border-radius: 25px;
    color: #002348;

    ${media.phone`
        width: 80%;
        display: block;

        margin: 5px auto;

        h2 {
            font-size: 1em;
            margin-bottom: -0.55rem;
        }

        p {
            display: none;
        }
    `}

    div {
        margin: 0 35px;
        }


`

const RelatedLinks = () => (
  <Container id="links">
    <h1>Links</h1>
    <LinkList>
        <LinkItem color="#33ccff" onClick={() => window.open('https://www.papahanaumokuakea.gov/')}>
            <div>
                <h2>Papahānaumokuākea Marine National Monument</h2>
                <br/>
                <p>https://www.papahanaumokuakea.gov/</p>
            </div>
        </LinkItem>
        <LinkItem color="#ff66ff" onClick={() => window.open('https://marinesanctuary.org/explore/papahanaumokuakea/')}>
            <div>
                <h2>National Marine Sanctuary Foundation</h2>
                <br />
                <p>https://marinesanctuary.org/explore/papahanaumokuakea/</p>
            </div>
        </LinkItem>
        <LinkItem color="#66ff33" onClick={() => window.open('http://www.hokulea.com/malamahonua/')}>
            <div>
                <h2>Polynesian Voyaging Society Hōkūle‘a</h2>
                <br />
                <p>http://www.hokulea.com/malamahonua/</p>
            </div>
        </LinkItem>
        <LinkItem color="#ff9900" onClick={() => window.open('http://www.PatrickChing.com/')}>
            <div>
                <h2>Patrick Ching Art</h2>
                <br />
                <p>www.PatrickChingArt.com/</p>
            </div>
        </LinkItem>
        <LinkItem color="#9999ff"  onClick={() => window.open('http://www.PatrickChing.com/')}>
            <div>
                <h2>Patrick Ching Art Lessons</h2>
                <br />
                <p>www.PatrickTeaChingArt.com</p>
            </div>
        </LinkItem>
    </LinkList>
  </Container>

);


export default RelatedLinks
