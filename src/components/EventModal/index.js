import React from 'react'
import styled from 'styled-components'
import flyer from '../../img/Waikiki Aquarium.jpg'

const Backdrop = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100vw;
    top: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 999999999999;
`;

const Container = styled.div`
  img{
    margin-top: 100px;
  }
`;

class EventModal extends React.Component {
 constructor(props) {
     super(props);
 }

 render () {
     return (
         <Backdrop onClick={this.props.toggleEventModal}>
             <Container onClick={e => e.stopPropagation()}>
                <img src={flyer} />
             </Container>
         </Backdrop>
     )
 }
}

export default EventModal