import React, { useState, useEffect, createContext } from "react"

export const ThemeContext = createContext()

// const initialState =
//     typeof window !== "undefined" &&
//     JSON.parse(window.localStorage.getItem("theme"))

function ThemeContextProvider(props) {
    const [darkMode, setDarkMode] = useState("light")

    const toggleMode = () => {
        darkMode == "light" ? setDarkMode("dark") : setDarkMode("light")
    }

    useEffect(() => {
        const local = JSON.parse(window.localStorage.getItem("theme"))
        setDarkMode(local)
    }, [])

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem("theme", JSON.stringify(darkMode))
        }
    }, [darkMode])

    return (
        <ThemeContext.Provider value={{ darkMode, toggleMode }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
