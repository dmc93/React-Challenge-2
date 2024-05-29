import logo from './logo.svg';
import './App.css';

import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';
import TaskPage from './pages/TaskPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ThemedComponent from "./components/ThemedComponent";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <div className="title-banner">
        <h1 className='site-title'>Professional Services</h1>
      </div>
      <div>
      <ThemeProvider>
        <ThemedComponent />
          
        </ThemeProvider>
        </div>
    </div>
  );
}

export default App;
