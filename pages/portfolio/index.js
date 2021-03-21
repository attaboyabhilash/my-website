import Meta from "../../src/Meta"
import styles from "../../styles/Portfolio.module.scss"
import Projects from "../../src/components/Projects"
import Certifications from "../../src/components/Certifications"

const Portfolio = () => {
    return (
        <>
            <Meta title="Portfolio | AttaboyAbhilash" />
            <h2 className={styles.heading}>Projects</h2>
            <Projects />
            <h2 className={styles.heading}>Certifications</h2>
            <Certifications />
            <div className={styles.empty_div}></div>
        </>
    )
}

export default Portfolio
