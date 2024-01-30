import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home'
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './styles/global.styles';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import '@radix-ui/themes/styles.css';
import './styles/theme-config.css';
import { Theme } from '@radix-ui/themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles />
      <DataProvider>
        <Theme>
          <ThemeProvider>
          <Navbar/>
          <Home/>
          </ThemeProvider>
        </Theme>
      </DataProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function