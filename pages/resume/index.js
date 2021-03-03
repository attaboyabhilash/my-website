import Meta from "../../src/Meta"
import styles from "../../styles/Resume.module.scss"

const Resume = () => {
    return (
        <>
            <Meta title="Resume | AttaboyAbhilash" />
            This is Resume {process.env.PORT}
        </>
    )
}

export default Resume
