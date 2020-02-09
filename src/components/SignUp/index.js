import React from 'react'
import Rodal from 'rodal'
import styled from 'styled-components'

import 'rodal/lib/rodal.css'

import DocIcon from '../../img/doc.png'
import TypeForm from '../../img/typeform.png'
import Doc from "../../data/music-video-contest.pdf"
import Download from '../../img/download.png'


const ContestButton = styled.div`
 background-color: #FFB347;
 cursor: pointer;
 border: #FFB347 solid 3px;
 border-radius: 5px;
 margin: 0 !important;
 padding: 5px;
     img, p {
       margin: 0 5px;
        }
`

const Modal = styled.div`
  &&&&&&  {
display: unset;
align-items: unset;

h1, p {
color: black;
}

p {
font-size: 18px;
}


.rodal, .rodal-fade-enter, .rodal-mask, .rodal-dialog {
  margin: auto;
  
}


@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
     .rodal-dialog .rodal-zoom-enter {
        margin: auto !important;
     }
     
}


.rodal-dialog{
width: 700px !important;
height: 400px !important;

@media (max-width: 414px) {
        width: 100% !important;
        height: 80% !important;
        align-items: initial !important;
      }

}
}
`

const SignupForm = styled.div`
&&&&&&  {
margin: 0 !important;
padding: 15px !important;
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
color: black;
width: 700px;
height: 400px;

@media (max-width: 414px) {
        width: 100% !important;
        height: 80% !important;
        
        h1 {
          font-size: 1.5rem;
        }
        
        h3 {
          font-size: 1rem;
        }
        
        p {
          font-size: 0.7rem;
          line-height: 0.9rem;
        }
      }

}
`

const Block = styled.div`
&&&&&&  {
display: flex !important;
margin: 0 !important;

@media (max-width: 414px) {
        flex-flow: column;
        
        
        
        div:last-of-type {
        margin-top: 140px !important;
          div {
            margin: 0 !important;
          }
        }
      }

  div {
  margin: 25px 32px !important;
  height: 250px;
  width: 244px;
  display: flex;
  flex-flow: column;
  
  @media (max-width: 414px) {
        margin: 5px 32px !important;
      }
  
        p {
          position: relative;
          margin-bottom: 0;
          
          @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
            width: 250px;
          }

          
              span:first-of-type {
                  user-select: none;
                }
                 
              span:last-of-type {
                  position: absolute;
                  top: 26px;
                  left: -1px;
                  color: #00000000 !important;
                }
             }
        
    div:last-of-type {
        img {
                width: 80px !important;
                border: 3px solid black!important;
                border-radius: 13px !important;
              }
          
    }
  }
}
`

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }


    render() {
        return (
            <Modal>
                <ContestButton onClick={this.show.bind(this)}>
                    <img src={Download} />
                    <p>Sign Up!</p>
                </ContestButton>
                <div>
                    <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
                        <SignupForm>
                            <h1>Contest Sign Up</h1>
                            <Block>
                                <div>
                                    <h3>Sign up via Print out</h3>
                                    <a target="_blank" href={Doc}><img src={DocIcon} /></a>
                                    <p>Please email to <span>aloha@Papahānaumokuākea.com</span><span>aloha@Papahanaumokuakea.com</span> upon completion</p>
                                </div>
                                <div>
                                    <h3>Sign up online here:</h3>
                                    <div><a target="_blank" href="https://papahnaumokukea.typeform.com/to/ZgMXVA"><img src={TypeForm} /></a></div>
                                </div>
                            </Block>
                        </SignupForm>
                    </Rodal>
                </div>
            </Modal>
        )
    }
}

export default SignUp