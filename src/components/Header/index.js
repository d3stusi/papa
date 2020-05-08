import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'

import DownloadModal from '../DownloadModal'
import Song from '../Song'
import EventModal from '../EventModal'

import Note from '../../img/purpose_graphics/song-note.svg'
import ToPlay from '../../img/play.svg'
import ToPause from '../../img/pause.svg'
import {media} from '../../layouts'


if (typeof window !== 'undefined') {
    // Make scroll behavior of internal links smooth
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]');
}


const Container = styled.div`
margin-bottom: 1.45rem;
background: #ffb347;
z-index: 999999;
transition: all .3s ease-out;
position: fixed;
width: 100%;
top: -57px;

@media (max-width: 600px) {
    position: fixed;
    z-index: 6;
    width: 200px;
    margin: 15px auto -5px auto;
    flex-flow: column;
    transform: ${ (props) => (props.hide) ? 'translateX(-400px);' : 'none;' }
  }


`;

const Inner = styled.div`
margin: 3px auto -5px auto;
max-width: 1500px;
padding: 0.875rem 1.0875rem;
display: flex;
justify-content: space-between;

@media (max-width: 600px) {
    flex-flow: column;
    padding-top: 55px;
}

embed{
    height: 25px;
    top: 6px;
    position: relative;
    right: 62px;

   svg {
    cursor: pointer;
   }
}

.embed-last {
    right: 0 !important;
    width: 25px;
    height: 25px;
}

span:first-of-type {
    margin-left: 100px;

    @media (max-width: 1150px) {
      margin-left: 0;
    }

}

span:last-of-type {
    margin-right: 100px;

    @media (max-width: 1150px) {
      margin-right: 0;
    }
}

span {
    flex:2;
    display: flex;
    justify-content: space-evenly;

    h1 {
      margin: 0 10px;
    }

    @media (max-width: 600px) {
      flex-flow: column;
    }
}

@media (max-width: 600px) {
    flex-flow: column;
}

span:first-of-type:after,
span:last-of-type {
  :before{
    content:'';
    display:inline-block;
  }

   @media (max-width: 600px) {
    margin-top: 20px;
  }
}

a {
color: #002348;
font-size: 20px;

  @media (max-width: 1150px) {
    font-size: 1.5vw;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }

}

#DownloadDiv {
  margin: 1px 10px !important;

  @media (max-width: 414px) {
    margin: 0px !important;
  }

}



`;

const Circle = styled.div `
	width: 100px;
	height: 90px;
	position: fixed;
	margin: auto;
	text-align: center;
    z-index: 3333;
	left: 0;
	right: 0;
    top: -15px;
	background: #ffb347;
	-moz-border-radius: 50px;
	-webkit-border-radius: 50px;
	border-radius: 50px;

    @media (max-width: 600px) {
      width: 52px;
      height: 52px;
      top: 0;
      left: 85%;
      margin: 0;
    }

    #note {
        top: 45px;
        position: fixed;
        left: 7px;
        right: 0;
        z-index: 3333;
        background-size: 24px;

        @media (max-width: 600px) {
          top: 14px;
          position: absolute;
          left: -8px;
        }

      p {
        opacity: 0;
        transition: all .3s ease-out;
        }
    }

	p {
	position: absolute;
	color: #002348;
	top: 68px;
    left: 0;
    right: 0;
    font-size: 75%;
    font-weight: 600;
	}


`;

const PlaceholderCircle = styled.div `
width: 100px;
`;


const MusicNote = styled.div`
background-image: url("${props => props.playing ? `${ToPause}` : `${ToPlay}` }");
background-repeat: no-repeat;
background-size: 24px;
background-position: 22px 1px;
width: 76px;
height: 33px;
margin: 0 auto;
`;

const Hamburger = styled.div`

@media (max-width: 600px) {
    position: fixed;
    height: 48px;
    width: 60px;
    background-color: #ffb347;
    margin: 0;
    padding: 1px;
    z-index: 30;
}


`

const HamburgerLines = styled.div`
margin: 11px;
z-index: 5;
background-color: #ffb347;

  div {
    margin: 6px 0;
    width: 35px;
    height: 5px;
    background-color: white;
    transition: 0.4s;
  }
`

const Social = styled.a`
    svg {
      z-index: -33;
      position: relative;
      width: ${props => props.width};
      top: ${props => props.top};
        :hover {
          cursor: pointer;
        }
    }

`


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSong: 'IntroShort',
            playing: true,
            hamburger: true,
            showEvent: false,
            showSongModal: false
        };
        this.toggleHamburger = this.toggleHamburger.bind(this);
        // this.stopPlaying = this.stopPlaying.bind(this);
        this.toggleEventModal = this.toggleEventModal.bind(this);
        this.toggleSongModal = this.toggleSongModal.bind(this);
        this.switchSongTo = this.switchSongTo.bind(this);
    }

    toggleHamburger() {
        this.setState(prevState => ({
            hamburger: !prevState.hamburger
        }))
    }

    toggleEventModal() {
        this.setState(prevState => ({
            showEvent: !prevState.showEvent
        }))
    }

    toggleSongModal() {
        this.setState(prevState => ({
            showSongModal: !prevState.showSongModal
        }))
    }

    switchSongTo(title) {
        if (!this.props.playing) {
            this.props.togglePlaying()
        }
        this.setState(prevState => ({
            currentSong: title
        }))
    }

    // stopPlaying() {
    //     this.setState({
    //         playing: false,
    //     })
    // }
    //


    render() {
        let headerDiv = ["header"];
        return (
            (
                <div>
                    <Hamburger hide={this.state.hamburger}>
                        <HamburgerLines onClick={this.toggleHamburger}>
                            <div/>
                            <div/>
                            <div/>
                        </HamburgerLines>
                    </Hamburger>
                    <Circle onClick={this.props.togglePlaying}>
                        <MusicNote id='note'
                                   playing={this.props.playing}
                                   ref={(el) => this._note = el}/>
                        <Song
                            currentSong={this.state.currentSong}
                            playing={this.props.playing}
                        />
                        <p ref={(el) => this._menu = el}></p>
                    </Circle>
                    <Container
                        className={headerDiv.join(' ')}
                        ref={(el) => this._input = el}
                        hide={this.state.hamburger}
                    >
                        >
                        <Inner id="ieCompat">
                                <span>
                                    <h1 style={{margin: 0}}>
                                        <Social
                                            onClick={this.toggleHamburger}
                                            width='27px'
                                            top="5px"
                                            href="https://www.facebook.com/PapahanaumokuakeaSongandColorBook/"
                                            target="_blank"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                                 <rect x="-1" y="-1" width="1026" height="1026" fill="none"/>
                                                 <path
                                                     d="M563.1 372.8c5.6-8.8 2.4-8.2 54.4-8.8l46-0.5 0.3-47.3L664 269l-47.2 0.1c-50.9 0.2-57.1 0.5-71.5 4.4 -39.5 10.5-73.1 45.4-85.7 88.8 -4.6 15.9-5.6 26.7-5.6 61.6V456h-46 -46v44.5V545h46 46v133 133h51.5H557V678 545h53.5H664v-44.5V456h-53.5H557v-33.8C557 385 557.4 381.9 563.1 372.8z"
                                                     fill="#FFF"/>
                                                <path
                                                    d="M903.6 324.5c-42.4-87.8-114.3-159.7-202.1-202.1C635 90.2 560.8 75.6 486.9 80.1c-55.9 3.3-111.5 17.8-161.8 42C203 180.9 114.9 294 88 426.5c-18.9 92.9-6.7 190 34.4 275C181.3 823.4 294.2 911.2 426.5 938c92.9 18.9 190 6.7 275-34.4 87.8-42.4 159.7-114.3 202.1-202.1 20.2-41.8 33.5-86.5 39.4-132.4C953.9 485.1 940.2 400.1 903.6 324.5zM610.5 456H664v44.5V545h-53.5H557v133 133h-51.5H454V678 545h-46 -46v-44.5V456h46 46v-32.1c0-34.9 1-45.7 5.6-61.6 12.6-43.4 46.2-78.3 85.7-88.8 14.4-3.9 20.6-4.2 71.5-4.4L664 269l-0.2 47.2 -0.3 47.3 -46 0.5c-52 0.6-48.8 0-54.4 8.8 -5.7 9.1-6.1 12.2-6.1 49.4V456H610.5z"
                                                    fill="#3B5998"/>
                                            </svg>
                                        </Social>
                                    </h1>
                                    <h1>
                                        <a
                                            href="/#"
                                            style={{
                                                textDecoration: 'none',
                                            }}
                                            onClick={this.toggleHamburger}
                                        >
                                            Home
                                        </a>
                                    </h1>
                                    <h1>
                                        <a
                                            href="/#video"
                                            style={{
                                                textDecoration: 'none',
                                            }}
                                            onClick={this.toggleHamburger}
                                        >
                                            Video
                                        </a>
                                    </h1>
                                    <h1>
                                        <a
                                            href="/#purpose"
                                            style={{
                                                textDecoration: 'none',
                                            }}
                                            onClick={this.toggleHamburger}
                                        >
                                            Purpose
                                        </a>
                                    </h1>

                                </span>
                            {/*<PlaceholderCircle />*/}
                            <h1 id='DownloadDiv' style={{margin: 0}}>
                                {this.state.showSongModal && <DownloadModal
                                    stopPlaying={this.props.stopPlaying}
                                    toggleSongModal={this.toggleSongModal}
                                    switchSongTo={this.switchSongTo}
                                    currentSong={this.state.currentSong}
                                    playing={this.props.playing}
                                />}
                                <a
                                    style={{
                                        textDecoration: 'none',
                                    }}
                                    onClick={this.toggleSongModal}
                                >
                                    Song & Lyrics
                                </a>
                            </h1>
                            <span>
                                    <h1>
                                        <a
                                            href='https://youtu.be/S36BuGngZjc'
                                            target="_blank"
                                            style={{
                                                textDecoration: 'none',
                                            }}

                                        >
                                            TV Show
                                        </a>
                                    </h1>

                                    <h1>
                                        <a
                                            href="/#contact"
                                            style={{
                                                textDecoration: 'none',
                                            }}
                                            onClick={this.toggleHamburger}
                                        >
                                            Contact
                                        </a>
                                    </h1>
                                    <h1 style={{margin: 0}}>
                                        <Social
                                            onClick={this.toggleHamburger}
                                            width="55px;"
                                            top="3px"
                                            href="https://www.patreon.com/naturallyhawaiian"
                                            target="_blank"
                                        >
                                            {/*<embed className="embed-last" src={Patreon}/>*/}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1903 681"><path
                                                d="M908.3 189.8c76.5-22.7 165.7 19.8 192.6 100.5 28.1 86.4-12.8 144.5-60.9 179.9 -48.5 35.4-123.4 35.4-172.8 1.4v111.9c32.4 15.8 73.6 20 103.4 18.3 107.3-15.3 191.1-76.2 226.4-168.5 36.6-97.5 11.1-211.1-65.1-281.8 -91.9-75.3-192.8-93.6-300.1-41.3 -75.3 38.3-127.7 116.2-140.5 201.3V681H640v0h155V354.1C796.5 281.9 820.6 219.5 908.3 189.8z"
                                                fill="#FFF"/><path
                                                d="M1290.6 309.9c-8.5-85-43.9-157.3-103.3-213.9 -63.7-60.9-155.8-107.6-277.5-93.5C739.8 23.8 611 172.5 611 331.1l1.3 349.9H640h51.4V311.6c12.8-85.1 65.1-163 140.5-201.3 107.3-52.4 208.1-34.1 300.1 41.3 76.2 70.6 101.7 184.3 65.1 281.8 -35.3 92.4-119.2 153.2-226.4 168.5 -29.8 1.7-71.1-2.6-103.4-18.3V471.6c49.4 34 124.3 34 172.8-1.4 48.1-35.4 88.9-93.5 60.9-179.9 -26.9-80.7-116.1-123.2-192.6-100.5 -87.7 29.7-111.8 92.1-113.2 164.3V681h72 93.7c121.7 0 219.5-74.9 269-143C1279.2 468.7 1297.6 395 1290.6 309.9z"
                                                fill="#E6461A"/></svg>
                                        </Social>
                                    </h1>
                                </span>
                        </Inner>
                    </Container>
                    {this.state.showEvent && <EventModal toggleEventModal={this.toggleEventModal}/>}
                </div>
            )

        )
    }
}

export default Header
