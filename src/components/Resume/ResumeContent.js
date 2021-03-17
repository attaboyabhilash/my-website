import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import styles from "./ResumeContent.module.scss"
import ContactInfo from "./smaller-components/ContactInfo"
import SkillDetails from "./smaller-components/SkillDetails"
import Projects from "./smaller-components/Projects"
import Education from "./smaller-components/Education"
import Trainings from "./smaller-components/Trainings"
import Certifications from "./smaller-components/Certifications"

const ResumeContent = () => {
    const { darkMode } = useContext(ThemeContext)
    return (
        <div
            style={
                darkMode
                    ? {
                          backgroundColor: "#333",
                          padding: "20px",
                          paddingTop: "70px",
                      }
                    : {
                          backgroundColor: "#f4f4f4",
                          padding: "20px",
                          paddingTop: "70px",
                      }
            }
            className={styles.flexer}
        >
            <div>
                <ContactInfo />
                <SkillDetails />
                <Projects />
            </div>
            <div>
                <Education />
                <Trainings />
                <Certifications />
            </div>
        </div>
    )
}

export default ResumeContent
