import { useContext } from "react"
// import ACVD from "../../../public/assets/resume/Abhilash_CV_Dark.docx"
// import ACVL from "../../../public/assets/resume/Abhilash_CV_Light.docx"
import { ThemeContext } from "../../context/ThemeContext"
import styles from "./ResumeContent.module.scss"
import { Button } from "antd"

const ResumeFooter = () => {
    const { darkMode } = useContext(ThemeContext)
    return (
        <div className={styles.resume_footer}>
            <span>Download {darkMode ? "Dark" : "Light"} Resume : </span>
            <Button type="primary">Download</Button>
        </div>
    )
}

export default ResumeFooter
