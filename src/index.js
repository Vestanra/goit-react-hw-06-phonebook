import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    background: '#9dc2c2',
    backgroundOpacity: '#f5f8f8',
    textTitle: '#252c2c',
    text: '#384343',
    error: '#ff9958',
    border: '#619191',
    hover: '#a1e0d1',
  },
  spacing: value => `${value * 8}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
    </ThemeProvider>
    </PersistGate>
  </React.StrictMode>
);
