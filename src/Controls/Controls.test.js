import React from 'react';
import ReactDOM from 'react-dom';
import '../icons';

import Controls from './Controls';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Controls />, div);
  ReactDOM.unmountComponentAtNode(div);
});
