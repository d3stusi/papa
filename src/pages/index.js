import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Title from '../components/Title'
import Mission from '../components/Mission'
import Purpose from '../components/Purpose'
import Contest from '../components/Contest'
import RelatedLinks from '../components/Related_Links'
import Contact from '../components/Contact'
import Banner from '../components/Banner'
import BumperStickerSignUp from '../components/BumperStickerSignUp'
import Coloring from '../components/Coloring'


const Page = styled.div`

opacity: ${ (props) => props.mounted ? `1;` : `0;`}
transition: opacity 1s;

`;

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mounted: false,
            playing: true,
            showEvent: true
        };
        this.stopPlaying = this.stopPlaying.bind(this);
        this.togglePlaying = this.togglePlaying.bind(this);
    }

    togglePlaying() {
        this.setState((prevState, props) => {
            const playing = !prevState.playing;
            return {playing}
        })
    }

    stopPlaying() {
        this.setState({
            playing: false
        })
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({mounted: true})
        }, 250);

    }

    render() {
        return (
            <Page mounted={this.state.mounted}>
                <Header
                    togglePlaying={() => this.togglePlaying()}
                    playing={this.state.playing}
                    stopPlaying={() => this.stopPlaying()}
                />
                <Title />
                <Coloring />
                <Banner />
                <BumperStickerSignUp />
                <Mission stopPlaying={() => this.stopPlaying()}/>
                <Purpose />
                <Contest />
                <RelatedLinks />
                <Contact />
            </Page>
        );
    }
}


export default IndexPage;
