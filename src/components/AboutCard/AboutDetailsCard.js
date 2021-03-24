import { useContext } from "react"
import Image from "next/image"
import { Card } from "antd"
import styles from "./AboutCard.module.scss"
import { ThemeContext } from "../../context/ThemeContext"

const AboutDetailsCard = () => {
    const { darkMode } = useContext(ThemeContext)
    return (
        <Card
            hoverable
            className={styles.about_card}
            style={
                darkMode === "dark"
                    ? {
                          backgroundColor: "#212121",
                          borderColor: "#191919",
                      }
                    : {
                          backgroundColor: "#FFF",
                          borderColor: "#f0f0f0",
                      }
            }
        >
            <div className={styles.card_text}>
                <h3>Abhilash Negi</h3>
                <small>@attaboyabhilash</small>
                <p className={styles.first}>Bangalore, India</p>
                <p>Bachelor in Mathematics and Computer Science</p>
                <p>abhi.negi.3609@gmail.com</p>
            </div>
            <div className={styles.about_image}>
                <Image
                    src="/assets/portfolioImage.jpg"
                    alt="profile-photo"
                    width="275px"
                    height="250px"
                    className={styles.about_image_}
                    priority={true}
                />
            </div>
        </Card>
    )
}

export default AboutDetailsCard
