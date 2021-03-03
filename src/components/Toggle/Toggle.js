import { useContext } from "react"
import { FiSun, FiMoon } from "react-icons/fi"
import { ThemeContext } from "../../context/ThemeContext"
import styles from "./Toggle.module.scss"

const Toggle = () => {
    const { darkMode, toggleMode } = useContext(ThemeContext)

    return (
        <div className={styles.toggles}>
            <label>
                <input
                    className={styles.toggle_checkbox}
                    type="checkbox"
                    checked={darkMode}
                    onChange={toggleMode}
                ></input>
                <div className={styles.toggle_slot}>
                    <div className={styles.sun_icon_wrapper}>
                        <FiSun className={styles.sun_icon} />
                    </div>
                    <div className={styles.toggle_button}></div>
                    <div className={styles.moon_icon_wrapper}>
                        <FiMoon className={styles.moon_icon} />
                    </div>
                </div>
            </label>
        </div>
    )
}

export default Toggle
