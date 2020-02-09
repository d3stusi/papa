import React from 'react'
import Sound from 'react-sound'

import IntroShort from '../../data/ShortVersion.mp3'
import LongVocal from "../../data/Papa_long_version_master.mp3"
import LongInstrumental from "../../data/Papa_Instumental_Long_Version.mp3"
import ShortInstrumental from "../../data/Papa_Song_Short_Version_Instrumental.mp3"
import ShortVocal from "../../data/Papa_Main_Version.mp3"

const SongArray = {'IntroShort': IntroShort, 'LongVocal':LongVocal,
    'LongInstrumental':LongInstrumental, 'ShortInstrumental':ShortInstrumental, 'ShortVocal':ShortVocal}

class Song extends React.Component {
    constructor(){
        super();
        this.state = {
            currentTrack: IntroShort
        }
    }


    render() {
        return (
            <div>
                <Sound
                    url={SongArray[this.props.currentSong]}
                    playStatus={this.props.playing?
                        Sound.status.PLAYING :
                        Sound.status.PAUSED
                    }
                    onPlaying={Sound.handleSongPlaying}
                    volume={50}
                    loop={false}
                />
            </div>
            )
    }
}

export default Song