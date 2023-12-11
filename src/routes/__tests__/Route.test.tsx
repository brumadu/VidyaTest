import 'react-native';
import React from 'react';

import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

import StackRoutes from '../stack.routes';
import TabRoutes from '../tab.routes';

it('renders stack navigator', () => {
  renderer.create(<StackRoutes />);
});

it('renders tab navigator', () => {
  renderer.create(<TabRoutes />);
});
