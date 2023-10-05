import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppProvider from './shared/contexts/app.context';
import SensorProvider from './shared/contexts/sensor.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <AppProvider>
      <SensorProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SensorProvider>
    </AppProvider>
  </React.StrictMode>
);
