import React, {useState, useEffect, createContext} from "react"

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
  const [darkMode, setDarkMode] = useState("")

  const toggleMode = () => {
    darkMode == "light" || darkMode == ""
      ? setDarkMode("dark")
      : setDarkMode("light")
  }

  useEffect(() => {
    const local = JSON.parse(window.localStorage.getItem("theme"))
    local !== null ? setDarkMode(local) : setDarkMode("")
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", JSON.stringify(darkMode))
    }
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{darkMode, toggleMode}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
