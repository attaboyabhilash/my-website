import React, { useState, useEffect, createContext } from "react"

export const ThemeContext = createContext()

const initialState =
    (typeof window !== "undefined" && window.localStorage.getItem("theme")) ||
    false

function ThemeContextProvider(props) {
    const [darkMode, setDarkMode] = useState(initialState)

    const toggleMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem("theme", darkMode)
        }
    }, [darkMode])

    return (
        <ThemeContext.Provider value={{ darkMode, toggleMode }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
