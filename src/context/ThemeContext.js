import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
    }, []);

    return (
        <ThemeContext.Provider value={{
            darkMode, setDarkMode
        }}>{ children }
        </ThemeContext.Provider>
    )
}