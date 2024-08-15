"use client";

import { createContext, useContext } from "react";


interface Theme {
    colors:{
        primary: string,
        secundary: string
    }
}

const defaultTheme: Theme = {
    colors:{
        primary: 'black',
        secundary: 'orange'
    }    
}


const ThemeContext = createContext<Theme>(defaultTheme)

export default function ThemeProvider({children}: {children:React.ReactNode}) {
    return (
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);