import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home'
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './styles/global.styles';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles />
    <ThemeProvider>
      <DataProvider>
        <Navbar />
        <Home />
      </DataProvider>
    </ThemeProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function