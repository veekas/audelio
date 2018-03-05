import React from 'react';
import ReactDOM from 'react-dom';
import '../icons';

import PlayerLayout from './PlayerLayout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerLayout />, div);
  ReactDOM.unmountComponentAtNode(div);
});
