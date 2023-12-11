import React from 'react';
import Routes from './src/routes';
import {Provider as ReduxProvider} from 'react-redux';
import store from './src/store';
import {ThemeProvider} from 'styled-components/native';
import {lightTheme} from './ligthTheme';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <ReduxProvider store={store}>
        <Routes />
      </ReduxProvider>
    </ThemeProvider>
  );
}
