/* eslint-disable prettier/prettier */
import React from 'react';
import renderer from 'react-test-renderer';
import {InvateScreen} from '../../InviteScreen';

test('renders correctly', () => {
  const tree = renderer.create(<InvateScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
