import React from 'react';
import Routes from './src/routes';
import {Provider as ReduxProvider} from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <Routes />
    </ReduxProvider>
  );
}
