/* eslint-disable no-console */

import React, { Component } from 'react';
import FilePlayer from 'react-player/lib/players/FilePlayer';
import styled from 'styled-components';

import PlayerLayout from './PlayerLayout';
import { mp3Urls, getEpisodeUrl } from './sample-data';

const PlayerContainer = styled.div`
  flex: 1;
`;

const firstUrl = getEpisodeUrl(mp3Urls);

export default class Player extends Component {
  constructor() {
    super();
    this.state = {
      url: firstUrl,
      playing: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
    };
    this.onDuration = this.onDuration.bind(this);
    this.playPause = this.playPause.bind(this);
    this.load = this.load.bind(this);
    this.ref = this.ref.bind(this);
  }

  onDuration = duration => {
    console.log('onDuration', duration);
    this.setState({ duration });
  }

  playPause = () => {
    this.setState({ playing: !this.state.playing });
  }

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
    });
  };

  ref = player => {
    this.player = player;
  }

  render() {
    const {
      url, playing, volume, muted, played, loaded, duration, playbackRate,
    } = this.state;
    return (
      <PlayerContainer>
        <FilePlayer
          ref={this.ref}
          url={url}
          playing={playing}
          volume={volume}
          muted={muted}
          played={played}
          loaded={loaded}
          duration={duration}
          playbackRate={playbackRate}
          onReady={() => console.log('onReady')}
          onStart={() => console.log('onStart')}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onBuffer={() => console.log('onBuffer')}
          onSeek={e => console.log('onSeek', e)}
          onEnded={this.onEnded}
          onError={e => console.log('onError', e)}
          onProgress={this.onProgress}
          onDuration={this.onDuration}
        />
        <PlayerLayout
          playPause={this.playPause}
          playing={this.state.playing}
        />
      </PlayerContainer>
    );
  }
}
