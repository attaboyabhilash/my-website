import { useContext } from "react"
import Image from "next/image"
import { Carousel } from "antd"
import styles from "./Certifications.module.scss"
import { ThemeContext } from "../../context/ThemeContext"

const index = () => {
    const { darkMode } = useContext(ThemeContext)
    return (
        <Carousel
            autoplay
            className={
                darkMode === "dark"
                    ? styles.carousel_dark
                    : styles.carousel_light
            }
        >
            <div>
                <Image
                    src="/assets/certificates/Udemy-ModernJavascript-Certificate.jpg"
                    alt="certificate-1"
                    width="1200px"
                    height="300px"
                    className={styles.certificate}
                    priority
                />
            </div>
            <div>
                <Image
                    src="/assets/certificates/FCC-Certificate-FrontEnd-Javascript.PNG"
                    alt="certificate-2"
                    width="1200px"
                    height="300px"
                    className={styles.certificate}
                    priority
                />
            </div>
            <div>
                <Image
                    src="/assets/certificates/Scrimba-Certificate-FrontEnd_ReactJS.png"
                    alt="certificate-3"
                    width="1200px"
                    height="300px"
                    className={styles.certificate}
                    priority
                />
            </div>
        </Carousel>
    )
}

export default index
