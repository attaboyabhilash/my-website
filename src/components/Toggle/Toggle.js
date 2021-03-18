import { useContext } from "react"
import { FiSun, FiMoon } from "react-icons/fi"
import { Switch } from "antd"
import { ThemeContext } from "../../context/ThemeContext"
import styles from "./Toggle.module.scss"

const Toggle = () => {
    const { darkMode, toggleMode } = useContext(ThemeContext)

    return (
        <div className={styles.toggles}>
            <Switch
                checkedChildren={<FiMoon />}
                unCheckedChildren={<FiSun />}
                onChange={toggleMode}
                checked={darkMode === "dark" ? true : false}
            />
        </div>
    )
}

export default Toggle
