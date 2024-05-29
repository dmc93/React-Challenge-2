//using this hook, we now gain access to consume the theme context (everything within the file)
//we passed theme and toggle theme functions to the ThemeContext.Provider
import { useTheme } from '../context/ThemeContext'
import Navbar from '../pages/Navbar';
import HomePage from '../pages/HomePage';
import TaskPage from '../pages/TaskPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const ThemedComponent = () => {

    //where does the toggle come from
    const {theme, toggleTheme} = useTheme();

    return(
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
            
            
            <BrowserRouter>
            <Navbar />
            
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>

            <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/task' element={<TaskPage />} />
            </Routes>
          </BrowserRouter>
        </div>
    )
}

export default ThemedComponent;