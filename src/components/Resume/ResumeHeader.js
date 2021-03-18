import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import styles from "./ResumeContent.module.scss"

const ResumeHeader = () => {
    const { darkMode } = useContext(ThemeContext)
    return (
        <div className={styles.resume_head}>
            <div
                className={styles.small_head}
                style={
                    darkMode === "dark"
                        ? {
                              backgroundColor: "#666",
                          }
                        : {
                              backgroundColor: "#ddd",
                          }
                }
            >
                <h1>Abhilash Negi</h1>
                <p>Full Stack Developer</p>
            </div>
        </div>
    )
}

export default ResumeHeader
