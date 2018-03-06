import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import Controls from './Controls/Controls';
import sampleCover from './sampleCover.jpg';

const Grid = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-areas:
    "epTitle    epTitle    epTitle"
    "showTitle  showTitle  showTitle"
    "previous   cover      next"
    "seek       seek       seek"
    "controls   controls   controls";
  grid-template-columns:
    [col1-start] 1fr
    [col2-start] 4fr
    [col3-start] 1fr
    [cols-end];
  grid-template-rows:
    [row1-start] 3fr
    [row2-start] 2fr
    [row3-start] 40vh
    [row4-start] 5fr
    [row5-start] 10vh
    [rows-end];
  justify-items: center;
  width: 100%;
  height: 100%;
`;

const EpTitle = styled.div`
  grid-area: epTitle;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #fff;
  font-size: 1.5em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 90%;
  align-self: end;
`;

const ShowTitle = styled.div`
  grid-area: showTitle;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #fff;
  font-size: 1em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 90%;
`;

const Previous = styled.div`
  grid-area: previous;
  color: #fff;
  font-size: 3em;
  align-self: center;
`;

const Next = styled.div`
  grid-area: next;
  color: #fff;
  font-size: 3em;
  align-self: center;
`;

const CoverContainer = styled.div`
  grid-area: cover;
  margin: 0;
  padding: 0;
`;

const CoverImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Seek = styled.div`
  grid-area: seek;
  color: #fff;
  align-self: end;
`;

export default function PlayerLayout(props) {
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

      <CoverContainer>
        <CoverImg src={sampleCover} />
      </CoverContainer>

      <Seek>This will be the seek bar</Seek>

      <Controls
        playPause={props.playPause}
        playing={props.playing}
        skipOrRewind={props.skipOrRewind}
      />

    </Grid>
  );
}

PlayerLayout.defaultProps = {
  playPause: false,
  playing: false,
  skipOrRewind: null,
};

PlayerLayout.propTypes = {
  playPause: PropTypes.func,
  playing: PropTypes.bool,
  skipOrRewind: PropTypes.func,
};
