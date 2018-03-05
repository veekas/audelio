import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

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

export default function Controls() {
  return (
    <ControlsContainer>
      <FontAwesomeIcon icon="undo" fixedWidth />
      {/* TODO: make play/pause icon variable based on player state */}
      <FontAwesomeIcon icon="play" fixedWidth />
      <FontAwesomeIcon icon="redo" fixedWidth />
    </ControlsContainer>
  );
}
