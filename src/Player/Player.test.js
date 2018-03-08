/* eslint-disable function-paren-newline */

import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import '../icons';
import Player from './Player';

// helper vars
const mp3Url = 'https://archive.org/download/NeverGonnaGiveYouUp/jocofullinterview41.mp3';
// const seconds = 15;

const wrapper = mount(<Player />);

describe('Player', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Player />, div);
  });

  it('allows us to set props', () => {
    wrapper.setProps({ url: mp3Url });
    expect(wrapper.props().url).toEqual(mp3Url);
  });

  // TODO:
  // describe('playPause method', () => {
  //   it.only('changes playing state', () => {
  //     const wrapper = mount(<Player playing={false} />);
  //     console.log('before', wrapper.instance().props.playing); // false
  //     wrapper.instance().playPause();
  //     console.log('after', wrapper.instance().props.playing); // still false??
  //     // expect(wrapper.instance().playing).toBe(true);
  //   });
  // });

  // TODO: how to test skipOrRewind?
  // describe('skipOrRewind method', () => {
  //   it.only('skip 15 seconds', () => {
  //     const actual = wrapper.instance().skipOrRewind(seconds, false);
  //     const expected = wrapper.instance().find('#react-player').getCurrentTime();
  //     expect(actual.find('#')).toBe(expected);
  //   });

  //   it.only('skips 15 seconds', () => {
  //     const div = document.createElement('div');
  //     const wrapper = mount(<Player />);
  //     ReactDOM.render(wrapper, div);
  //     wrapper.instance().onDuration();
  //     // expect(actual.find('#')).toBe(expected);
  //     ReactDOM.unmountComponentAtNode(div);
  //   });
  // });
});
