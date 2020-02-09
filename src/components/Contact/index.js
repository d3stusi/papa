import React from 'react'
import styled from 'styled-components'

import { media } from '../../layouts'

import Facebook from '../../img/facebook.svg'
import Patreon from '../../img/patreon.svg'

import Email from '../Email'

const Container = styled.div`
  padding-top: 100px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  max-width: 935px;
  margin: 0 auto 150px auto;
  
  ${media.phone`
        padding-top: 55px;
    `}
  
`


const Title = styled.div`
  display: block;
`

const Block = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  
  ${media.phone`
    flex-flow: column;
    
    `}
`

const Info = styled.div`
  display: flex;
  flex-flow: column;
  margin: 20px;
  h3 {
    font-size: 1.2em;
  }
  
  ${media.phone`
    margin: 20px 0;
    h2 {
        font-size: 1.2em;
    }
    h3 {
        font-size: 0.8em;
    }
    `}
  
  div {
  flex: 1;
  padding: 0 15px;
  
  ${media.phone`
    padding: 0 10px;
    `}
  }
  
  embed {
    width: 40px;
    margin: 0 10px 10px 0;
  }
  
`

const TextProtection = styled.span`
position: relative;

  

h3:first-of-type {user-select: none; }

h3:last-of-type{
position: absolute;
z-index: 333;
color: #ffe4c400;
bottom: 0px;
}
`

const Subscribe = styled.div`
  display: flex;
  flex-flow: column;
  margin: 20px;
  
    ${media.phone`
    margin: 20px 0;
    h2 {
        font-size: 1.2em;
    }
    h3 {
        font-size: 0.8em;
    }
    `}

  
  div {
  padding: 0 15px;
  }
`




const Contact = () => (
    <Container id="contact">
        <Title><h1>Contact</h1></Title>
        <Block>
            <Info>
                <div>
                    <h2>Social</h2>
                    <embed className="embed-last" src={Facebook} />
                    <embed className="embed-last" src={Patreon} />
                </div>
                <div>
                    <h2>Email:</h2>
                    <TextProtection>
                        <h3>aloha@Papahānaumokuākea.com</h3>
                        <h3>aloha@Papahanaumokuakea.com</h3>
                    </TextProtection>
                </div>
                <div>
                    <h2>Phone number:</h2>
                    <h3>808-259-5354</h3>
                </div>
            </Info>
            <Subscribe>
                <h2>Get project update email notifications:</h2>
                <div><Email
                    url="https://patrickteachingart.us11.list-manage.com/subscribe/post?u=00bb906f4310de403db0d029c&amp;id=a3f38ddde1"
                    render={({ subscribe, status, message }) => (
                        <CustomForm
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}

                        />
                        )}
                    />
                </div>
            </Subscribe>
        </Block>
    </Container>

)

export default Contact