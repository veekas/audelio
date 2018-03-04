import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import logo from '../audelio-logo-wh.svg';

const HeaderBar = styled.header`
  background-color: teal;
  padding: 0em 1em 1em;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
`;

const Logo = styled.img`
  height: 2.5em;
`;

// TODO: find better way to do FontAwesomeIcon styling
const styles = {
  icon: {
    'font-size': '1.56em',
  },
};

export default function Header() {
  return (
    <HeaderBar>
      <FontAwesomeIcon icon="search" fixedWidth style={styles.icon} />
      <Logo src={logo} alt="logo" />
      <FontAwesomeIcon icon="user" fixedWidth style={styles.icon} />
    </HeaderBar>
  );
}
