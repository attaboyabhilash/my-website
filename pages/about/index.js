import Meta from "../../src/Meta"
import styles from "../../styles/About.module.scss"

const About = () => {
    return (
        <>
            <Meta title="About | AttaboyAbhilash" />
            This is About {process.env.PORT}
        </>
    )
}

export default About
