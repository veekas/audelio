import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import logo from '../audelio-logo-wh.svg';

const Logo = styled.img`
  height: 80px;
`;

const HeaderBar = styled.header`
  background-color: teal;
  padding: 20px;
  color: white;
`;

export default function Header() {
  return (
    <HeaderBar>
      <FontAwesomeIcon icon="search" fixedWidth size="2x" />
      <Logo src={logo} alt="logo" />
      <FontAwesomeIcon icon="user" fixedWidth size="2x" />
    </HeaderBar>
  );
}
