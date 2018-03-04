import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import Logo from './Logo';

const HeaderBar = styled.header`
  background-color: teal;
  padding: 0em 1em 1em;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
`;

// TODO: find better way to do FontAwesomeIcon styling
const styles = {
  icon: {
    fontSize: '1.56em',
  },
};

export default function Header() {
  return (
    <HeaderBar>
      <FontAwesomeIcon icon="search" fixedWidth style={styles.icon} />
      <Logo />
      <FontAwesomeIcon icon="user" fixedWidth style={styles.icon} />
    </HeaderBar>
  );
}
