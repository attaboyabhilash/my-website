import { Button } from "antd"
import Image from "next/image"
import { useRouter } from "next/router"
import styles from "../styles/Home.module.scss"

const Home = () => {
    const router = useRouter()
    return (
        <div className={styles.hero_section}>
            <div className={styles.flexer}>
                <div className={styles.left_content}>
                    <h1>
                        Your Friendly
                        <br />
                        Neighbourhood
                        <br />
                        Full Stack Developer
                    </h1>
                    <p>
                        Hi, I am Abhilash Negi and I am a Full Stack Developer.
                        I work with technologies such as <span></span>
                    </p>
                    <div className={styles.__buttons}>
                        <Button
                            type="primary"
                            size="large"
                            onClick={() => router.push("/resume")}
                        >
                            Hire Me!
                        </Button>
                        <Button
                            type="primary"
                            danger
                            size="large"
                            onClick={() => router.push("/portfolio")}
                        >
                            Projects
                        </Button>
                    </div>
                </div>
                <div className={styles.right_image}>
                    <Image
                        src="/assets/vectors/homepage-vector.svg"
                        alt="vector-art-by-freepik"
                        width="400px"
                        height="400px"
                        priority={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
