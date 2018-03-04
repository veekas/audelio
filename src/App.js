import React from 'react';
import styled from 'styled-components';

import Header from './Header/Header';
import Player from './Player/Player';
import './icons';

const AppContainer = styled.div`
  text-align: center;
  background-color: teal;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Player />
    </AppContainer>
  );
}

export default App;
