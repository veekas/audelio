import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PlayPause from './PlayPause';

const ControlsContainer = styled.div`
  grid-area: controls;
  height: 100%;
  width: 100vw;
  background-color: #fff;
  color: #85cfd8;
  font-size: 1.56em;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
  // padding: 1em 0;
  // bottom: 0px;

// const IconButton = styled.button`
//   background-color: transparent;
//   background-repeat:no-repeat;
//   border: none;
//   cursor:pointer;
//   overflow: hidden;
//   outline:none;
// `;

export default function Controls(props) {
  return (
    <ControlsContainer>

      <FontAwesomeIcon
        icon="undo"
        fixedWidth
        onClick={() => props.skipOrRewind(15, true)}
      />

      <PlayPause playing={props.playing} playPause={props.playPause} />

      <FontAwesomeIcon
        icon="redo"
        fixedWidth
        onClick={() => props.skipOrRewind(15, false)}
      />

    </ControlsContainer>
  );
}
