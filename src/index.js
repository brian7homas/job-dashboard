import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home'
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './styles/global.styles';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <ThemeProvider>
        <Navbar />
        <Home />
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function