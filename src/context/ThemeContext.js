import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

/* export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN' :
            return { user: action.payload };
        case 'LOGOUT':
            return { user: null };
        default:
            return state;
    }
} */

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