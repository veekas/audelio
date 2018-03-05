import React from 'react';
import ReactDOM from 'react-dom';
import '../icons';

import Layout from './Layout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Layout />, div);
  ReactDOM.unmountComponentAtNode(div);
});
