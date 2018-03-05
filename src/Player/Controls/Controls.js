import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import PropTypes from 'prop-types';

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
      <FontAwesomeIcon icon="undo" fixedWidth />
      {
      props.playing
        ? <FontAwesomeIcon icon="pause" fixedWidth onClick={props.playPause} />
        : <FontAwesomeIcon icon="play" fixedWidth onClick={props.playPause} />
      }
      <FontAwesomeIcon icon="redo" fixedWidth />
    </ControlsContainer>
  );
}

Controls.defaultProps = {
  playPause: false,
  playing: false,
};

Controls.propTypes = {
  playPause: PropTypes.func,
  playing: PropTypes.bool,
};
