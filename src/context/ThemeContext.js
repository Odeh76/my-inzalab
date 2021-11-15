import React, { useState } from 'react'

export const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')

    const value = {theme, setTheme};

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}


export default ThemeProvider