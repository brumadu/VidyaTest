/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import {it} from '@jest/globals';

import renderer from 'react-test-renderer';

import StackRoutes from '../src/routes/stack.routes';
import TabRoutes from '../src/routes/tab.routes';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('renders stack navigator', () => {
  renderer.create(<StackRoutes />);
});

it('renders tab navigator', () => {
  renderer.create(<TabRoutes />);
});
