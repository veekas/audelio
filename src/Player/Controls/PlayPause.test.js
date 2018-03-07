import React from 'react';
import ReactDOM from 'react-dom';

import '../../icons';
import PlayPause from './PlayPause';

describe('PlayPause', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PlayPause />, div);
  });
});
