import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import sampleCover from './sampleCover.jpg';

const Grid = styled.div`
  flex-grow: 1;
  display: grid;

  grid-template-areas:
    "0-0       showTitle  showTitle  showTitle  showTitle  0-6"
    "1-0       epTitle    epTitle    epTitle    epTitle    1-6"
    "previous  cover      cover      cover      cover      next"
    "previous  seek       seek       seek       seek       next"
    "rewind    rewind     playPause  playPause  skip       skip";

  grid-gap: 10px;
  color: #FFF;
`;

const ShowTitle = styled.div`
  grid-area: showTitle;
`;

const EpTitle = styled.div`
  grid-area: epTitle;
`;

const Previous = styled.div`
  grid-area: previous;
`;

const Next = styled.div`
  grid-area: next;
`;

const Cover = styled.div`
  grid-area: cover;
  background-image: url(${sampleCover});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 50vh;
  margin: 0;
  padding: 0;
`;

const Seek = styled.div`
  grid-area: seek;
`;

const Rewind = styled.div`
  grid-area: rewind;
`;

const Skip = styled.div`
  grid-area: skip;
`;

const PlayPause = styled.div`
  grid-area: playPause;
`;

export default function Player() {
  return (
    <Grid>
      <ShowTitle>
        The Ezra Klein Show
      </ShowTitle>

      <EpTitle>
        How technology brings out the worst in us, with Tristan Harris
      </EpTitle>

      <Previous>
        <FontAwesomeIcon icon="chevron-left" fixedWidth />
      </Previous>

      <Next>
        <FontAwesomeIcon icon="chevron-right" fixedWidth />
      </Next>

      <Cover />

      <Seek>
        This will be the seek bar
      </Seek>

      <Rewind>
        <FontAwesomeIcon icon="undo" fixedWidth />
      </Rewind>

      <PlayPause>
        {/* TODO: make play/pause icon variable based on player state */}
        <FontAwesomeIcon icon="play" fixedWidth />
      </PlayPause>

      <Skip>
        <FontAwesomeIcon icon="redo" fixedWidth />
      </Skip>

    </Grid>
  );
}
