import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import sampleCover from './sampleCover.jpg';

const Grid = styled.div`
  flex-grow: 1;
  display: grid;

  grid-template-areas:
    "0-0       epTitle    epTitle    epTitle    epTitle    0-5"
    "1-0       showTitle  showTitle  showTitle  showTitle  1-5"
    "previous  cover      cover      cover      cover      next"
    "seek      seek       seek       seek       seek       seek"
    "controls  controls   controls   controls   controls controls";

  grid-gap: 10px;
`;

const EpTitle = styled.div`
  grid-area: epTitle;
  font-family: "Poppins";
  font-weight: 600;
  color: #fff;
  font-size: 1em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 10vh;
  display: flex;
`;

const ShowTitle = styled.div`
  grid-area: showTitle;
  font-family: "Poppins";
  font-weight: 400;
  color: #fff;
  font-size: 1em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 5vh;
`;

const Previous = styled.div`
  grid-area: previous;
  color: #FFF;
  font-size: 3em;
  align-self: center;
`;

const Next = styled.div`
  grid-area: next;
  color: #fff;
  font-size: 3em;
  align-self: center;
`;

const Cover = styled.div`
  grid-area: cover;
  background-image: url(${sampleCover});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 40vh;
  margin: 0;
  padding: 0;
`;

const Seek = styled.div`
  grid-area: seek;
  color: #fff;
`;

const Controls = styled.div`
  grid-area: controls;
  position: fixed;
  padding: 1em 0;
  bottom: 0px;
  height: 5vh;
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #85cfd8;
  font-size: 1.56em;
`;

// TODO: find better way to do FontAwesomeIcon styling
// const styles = {
//   title: {
//     'align-self': 'flex-end',
//   },
// };

export default function Player() {
  return (
    <Grid>
      <EpTitle>
        How technology brings out the worst in us, with Tristan Harris
      </EpTitle>

      <ShowTitle>
        The Ezra Klein Show
      </ShowTitle>

      <Previous>
        <FontAwesomeIcon icon="chevron-left" fixedWidth />
      </Previous>

      <Next>
        <FontAwesomeIcon icon="chevron-right" fixedWidth />
      </Next>

      <Cover />

      <Seek>This will be the seek bar</Seek>

      <Controls>
        <FontAwesomeIcon icon="undo" fixedWidth />

        {/* TODO: make play/pause icon variable based on player state */}
        <FontAwesomeIcon icon="play" fixedWidth />

        <FontAwesomeIcon icon="redo" fixedWidth />
      </Controls>

    </Grid>
  );
}
