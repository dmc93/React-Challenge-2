import { createContext, useContext, useState } from 'react'

// we start by creating our global object and this makes the context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        //manages current theme and toggles theme
        setTheme((previousTheme) => (previousTheme === 'light' ? 'dark' : 'light'))
    }

    return(
        //ThemeContext.Provider is a component to wrap around components to access the contexts value
        //Pass value that we want to share througout the tree using the "value" prop
        //wraps around the children , making the props passed to it available at every component
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

//uses useContext() to consume the ThemeContext context
const useTheme = () => {
    //consumes the information made available by the .Provider
    return useContext(ThemeContext)
}

export { ThemeProvider, useTheme }