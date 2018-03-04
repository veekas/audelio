import React from 'react';
import styled from 'styled-components';

import Header from './Header/Header';
import './icons';

const AppContainer = styled.div`
  text-align: center;
`;

const AppIntro = styled.p`
  font-size: large;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <AppIntro>
        To get started, edit <code>src/App.js</code> and save to reload.
      </AppIntro>
    </AppContainer>
  );
}

export default App;
