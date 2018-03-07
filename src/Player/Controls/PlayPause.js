import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

function Play(props) {
  return <FontAwesomeIcon icon="play" fixedWidth onClick={props.playPause} />;
}

function Pause(props) {
  return <FontAwesomeIcon icon="pause" fixedWidth onClick={props.playPause} />;
}

export default function PlayPause(props) {
  return props.playing
    ? <Pause playPause={props.playPause} />
    : <Play playPause={props.playPause} />;
}
