import React, { useState, useEffect, createContext } from "react"

export const ThemeContext = createContext()

const initialState =
    false ||
    (typeof window !== "undefined" && JSON.parse(localStorage.getItem("theme")))

function ThemeContextProvider(props) {
    const [darkMode, setDarkMode] = useState(initialState)

    const toggleMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", JSON.stringify(darkMode))
        }
    }, [darkMode])

    return (
        <ThemeContext.Provider value={{ darkMode, toggleMode }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
