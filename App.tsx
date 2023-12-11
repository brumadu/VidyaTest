import React from 'react';
import Routes from './src/routes';
import {Provider as ReduxProvider} from 'react-redux';
import store from './src/store';
import {ThemeProvider} from 'styled-components/native';
import {lightTheme} from './ligthTheme';
import { CreateRealm } from './src/services/realm';

export default function App() {
  CreateRealm()
  return (
    <ThemeProvider theme={lightTheme}>
      <ReduxProvider store={store}>
        <Routes />
      </ReduxProvider>
    </ThemeProvider>
  );
}
