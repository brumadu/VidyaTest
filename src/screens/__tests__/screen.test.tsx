import 'react-native';
import React from 'react';

import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

import Client from '../Client';
import Order from '../Order';
import Product from '../Product';

it('given render, client should render', () => {
  renderer.create(<Client />);
});

it('given creation, Order should render', () => {
  renderer.create(<Order />);
});

it('given creation, Product should render', () => {
  renderer.create(<Product />);
});
