import {useContext} from "react"
import {ThemeContext} from "../../context/ThemeContext"
import styles from "./ResumeContent.module.scss"
import {Button} from "antd"

const ResumeFooter = () => {
  const {darkMode} = useContext(ThemeContext)
  return (
    <div className={styles.resume_footer}>
      <span>
        Download {darkMode === "dark" ? "Dark" : "Light"} Resume :&nbsp;&nbsp;
      </span>
      <a
        href={
          darkMode === "dark"
            ? "/assets/resume/Abhilash_CV_Dark.docx"
            : "/assets/resume/Abhilash_CV_Light.docx"
        }
        download
      >
        <Button type="primary">Download</Button>
      </a>
    </div>
  )
}

export default ResumeFooter
