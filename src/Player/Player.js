import React, { Component } from 'react';
import FilePlayer from 'react-player/lib/players/FilePlayer';
import styled from 'styled-components';

import PlayerLayout from './PlayerLayout';

const sampleMP3Url =
  'https://rss.art19.com/episodes/9bead20d-767f-48b3-aaab-a1b5a21cf8fd.mp3';

const PlayerContainer = styled.div`
  flex: 1;
`;

export default class Player extends Component {
  constructor() {
    super();
    this.state = {
      url: sampleMP3Url,
      playing: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false,
    };
    this.playPause = this.playPause.bind(this);
  }

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
    });
  };

  playPause = () => {
    this.setState({ playing: !this.state.playing });
    console.log(this.state.playing);
  }

  // componentDidMount() {
  //   this.playPause();
  // }

  render() {
    return (
      <PlayerContainer>
        <FilePlayer
          url={this.state.url}
          controls={this.state.controls}
          // remove these after testing
          playing
          playbackRate="2.5"
          volume="0.1"
        />
        <PlayerLayout props={this.state} playPause={this.playPause} />
      </PlayerContainer>
    );
  }
}
