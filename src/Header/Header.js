import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import logo from '../audelio-logo-wh.svg';

export default function Header() {
  return (
    <header className="App-header">
      <FontAwesomeIcon icon="search" />
      <img src={logo} className="App-logo" alt="logo" />
      <FontAwesomeIcon icon="user" />
    </header>
  );
}
