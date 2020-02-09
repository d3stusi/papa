import React from 'react'
import styled from 'styled-components'

import DLIcon from "../../img/cloud-download.svg"
import PlayIcon from "../../img/play-circle.svg"
import PauseIcon from "../../img/pause-circle.svg"
import TimesCircle from "../../img/times-circle.svg"

import LongVocalImage from "../../img/SongModal/Kawika-Patrick-Shaka.jpg"
import ShortVocalImage from "../../img/SongModal/Kawika-Shaka.jpg"
import LongInstrumentalImage from "../../img/SongModal/IMG_3585.jpg"
import ShortInstrumentalImage from "../../img/SongModal/bumper_sticker_final.jpg"

import LongVocal from "../../data/Papa_long_version_master.mp3"
import LongInstrumental from "../../data/Papa_Instumental_Long_Version.mp3"
import ShortInstrumental from "../../data/Papa_Song_Short_Version_Instrumental.mp3"
import ShortVocal from "../../data/Papa_Main_Version.mp3"
import Lyric from "../../data/Song_Lyrics_Short_Version_with_Chords_G.pdf"
import LyricLong from "../../data/Long_Version_with_Chords_G.pdf"


const ImageDict = {
    'LongVocal': LongVocalImage, 'LongInstrumental': LongInstrumentalImage,
    'ShortInstrumental': ShortInstrumentalImage, 'ShortVocal': ShortVocalImage
}

const ContestButton = styled.div`
    color: #002348;
    font-size: 20px;
    position: relative;
    top: 19px;
    cursor: pointer;
    
     @media (max-width: 992px) {
        font-size: 1.7vw;
      }
      
     @media (max-width: 500px) {
        font-size: 20px;
      }
`

const Overlay = styled.div`
background: rgba(0,0,0,0.7);
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Modal = styled.div`
width: 700px;
height: ${(props) => props.modalWindowExtend ? `800px` : `500px`}
background-color: #fff;
padding: 15px;
transition: all 300ms ease;

@media (max-width: 414px) {
    width: 100% !important;
    height: 90% !important;
    margin-top: 14%;
  }

h1, h3, p {
color: black;
}

@media (max-width: 600px) {
  height: ${(props) => props.modalWindowExtend ? `800px;` : `600px;`};
    
  h3 {
    margin: 0;
  }
}

p {
font-size: 18px;
}

@media (max-width: 414px) {
    
    font-size: 16px !important;
    
    
    h3 {
      font-size: 12px !important;
    }
    
    a {
      font-size: 12px !important;
    }
    
    p {
      font-size: 12px !important;
    }
    
  }

`


const PlayRow = styled.div`
margin: 0;
display: flex;
flex-flow: row;
align-items: center;
justify-content: space-between;

`
const TitleButton = styled.a`
    padding: 5px;
    background-color: #FFB347;
    border: 3px solid #FFB347;
    border-radius: 5px;
    margin: 15px 0;
    
    @media (max-width: 600px) {
      margin: 0;
    }
    
    @media (max-width: 414px) {
        margin: 5px auto !important;
      }
  
`

const SongColumns = styled.div`
    display: flex;
    justify-content: space-around;
    
    @media (max-width: 600px) {
      flex-flow: column;
      margin: 0 auto;
      width: 315px;
    }
    
`

const CenterTitle = styled.div`
text-align: center;
`

const Icons = styled.div`
margin: 0 5px;

img {
width: 25px;
height: 25px;
margin: 15px 10px;
cursor: pointer;
}

`

const CloseWindow = styled.div`
background: url("${TimesCircle}") no-repeat;
background-size: 35px;
width: 40px;
height: 40px;
float: right;
position: relative;
transform: translateX(-40px);
margin-right: -40px;
cursor: pointer;
`

const PlayingImageWindow = styled.div`
  display: flex; 
  justify-content: center;
  max-height: 330px;
  overflow: hidden;
  img {
    object-fit: contain;
  }
  
  @media (max-width: 600px) {
    max-height: 175px;
  }
`


class DownloadModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            modalWindowExtend: false,
            displayImages: false
        };
        this.togglePlayingImage = this.togglePlayingImage.bind(this);
    }

    togglePlayingImage() {
        this.setState(prevState => ({
            modalWindowExtend: true
        }))
        if (!this.state.displayImages) {
            console.log('isRunning')
            let checkHeight = setInterval(() => {
                if (this.divRef.clientHeight !== undefined && this.divRef.clientHeight === 800) {
                    this.setState(prevState => ({
                        displayImages: true
                    }))
                    clearInterval(checkHeight);
                }
            }, 12);
        }
    }



render() {
    return (
        <Overlay onClick={this.props.toggleSongModal}>
            <Modal
                innerRef={element => this.divRef = element}
                onClick={e => e.stopPropagation()}
                modalWindowExtend={this.state.modalWindowExtend}
            >
                <CloseWindow onClick={this.props.toggleSongModal}/>
                <CenterTitle>
                    <h1>Download <br/>Papahānaumokuākea song</h1>
                </CenterTitle>
                <SongColumns>
                    <div>
                        <h3>Short Version - 2:40 </h3>
                        <PlayRow>
                            <TitleButton>
                                Original
                            </TitleButton>
                            <Icons onClick={this.togglePlayingImage}>
                                <a href={ShortVocal} download={ShortVocal}>
                                    <img src={DLIcon}/>
                                </a>
                                {/* Ternary that toggles pause play button depending on current song play*/}
                                {(this.props.currentSong === 'ShortVocal' && this.props.playing === true) ?
                                    <img onClick={this.props.stopPlaying} src={PauseIcon}/>
                                    :
                                    <img
                                        onClick={() => this.props.switchSongTo('ShortVocal')}
                                        src={PlayIcon}
                                    />
                                }
                            </Icons>
                        </PlayRow>
                        <PlayRow>
                            <TitleButton>
                                Instrumental
                            </TitleButton>
                            <Icons onClick={this.togglePlayingImage}>
                                <a href={ShortInstrumental} download={ShortInstrumental}>
                                    <img src={DLIcon}/>
                                </a>
                                {/* Ternary that toggles pause play button depending on current song play*/}
                                {(this.props.currentSong === 'ShortInstrumental' && this.props.playing === true) ?
                                    <img onClick={this.props.stopPlaying} src={PauseIcon}/>
                                    :
                                    <img
                                        onClick={() => this.props.switchSongTo('ShortInstrumental')}
                                        src={PlayIcon}
                                    />
                                }
                            </Icons>
                        </PlayRow>
                        <PlayRow>
                            <TitleButton>
                                Lyric Sheet
                            </TitleButton>
                            <Icons>
                                <a href={Lyric} download={Lyric}>
                                    <img src={DLIcon}/>
                                </a>
                            </Icons>
                        </PlayRow>
                    </div>
                    <div>
                        <h3>Long Version - 8:27</h3>
                        <PlayRow>
                            <TitleButton>
                                Original
                            </TitleButton>
                            <Icons onClick={this.togglePlayingImage}>
                                <a href={LongVocal} download={LongVocal}>
                                    <img src={DLIcon}/>
                                </a>
                                {/* Ternary that toggles pause play button depending on current song play*/}
                                {(this.props.currentSong === 'LongVocal' && this.props.playing === true) ?
                                    <img onClick={this.props.stopPlaying} src={PauseIcon}/>
                                    :
                                    <img
                                        onClick={() => this.props.switchSongTo('LongVocal')}
                                        src={PlayIcon}
                                    />
                                }
                            </Icons>
                        </PlayRow>
                        <PlayRow>
                            <TitleButton>
                                Instrumental
                            </TitleButton>
                            <Icons onClick={this.togglePlayingImage}>
                                <a href={LongInstrumental} download={LongInstrumental}>
                                    <img src={DLIcon}/>
                                </a>
                                {/* Ternary that toggles pause play button depending on current song play*/}
                                {(this.props.currentSong === 'LongInstrumental' && this.props.playing === true) ?
                                    <img onClick={this.props.stopPlaying} src={PauseIcon}/>
                                    :
                                    <img
                                        onClick={() => this.props.switchSongTo('LongInstrumental')}
                                        src={PlayIcon}
                                    />
                                }
                            </Icons>
                        </PlayRow>
                        <PlayRow>
                            <TitleButton>
                                Lyric Sheet
                            </TitleButton>
                            <Icons>
                                <a href={LyricLong} download={LyricLong}>
                                    <img src={DLIcon}/>
                                </a>
                            </Icons>
                        </PlayRow>
                    </div>
                </SongColumns>
                <CenterTitle>
                    <p>Kawika Kahiapo – Lead Musician</p>
                </CenterTitle>
                {this.state.displayImages && <PlayingImageWindow>
                    <img src={ImageDict[this.props.currentSong]}/>
                </PlayingImageWindow>}
            </Modal>
        </Overlay>
    )
}
}

export default DownloadModal