import { useContext } from "react"
import Meta from "../../src/Meta"
import { Card } from "antd"
import { IoArrowBackSharp } from "react-icons/io5"
import styles from "../../styles/Resume.module.scss"
import ResumeHeader from "../../src/components/Resume/ResumeHeader"
import ResumeContent from "../../src/components/Resume/ResumeContent"
import ResumeFooter from "../../src/components/Resume/ResumeFooter"
import { useRouter } from "next/router"
import { ThemeContext } from "../../src/context/ThemeContext"

const Resume = () => {
    const router = useRouter()
    const { darkMode } = useContext(ThemeContext)
    return (
        <>
            <Meta title="Resume | AttaboyAbhilash" />
            <div className={styles.head}>
                <h2>Resume</h2>
                <p onClick={() => router.push("/")}>
                    <IoArrowBackSharp /> Back
                </p>
            </div>
            <Card
                hoverable
                className={styles.resume_card}
                style={
                    darkMode
                        ? {
                              backgroundColor: "#212121",
                              borderColor: "#191919",
                          }
                        : {
                              backgroundColor: "#fff",
                              borderColor: "#f0f0f0",
                          }
                }
            >
                <div className={styles.content}>
                    <ResumeHeader />
                    <ResumeContent />
                    <ResumeFooter />
                </div>
            </Card>
            <div className={styles.empty}></div>
        </>
    )
}

export default Resume
