import 'react-native';
import React from 'react';

import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

import StackRoutes from '../stack.routes';
import TabRoutes from '../tab.routes';

it('given creation, stack navigator should render', () => {
  renderer.create(<StackRoutes />);
});

it('given creation, renders tab navigator should render', () => {
  renderer.create(<TabRoutes />);
});
