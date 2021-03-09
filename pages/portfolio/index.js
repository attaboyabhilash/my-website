import Meta from "../../src/Meta"
import Image from "next/image"
import styles from "../../styles/Portfolio.module.scss"

const Portfolio = () => {
    return (
        <>
            <Meta title="Portfolio | AttaboyAbhilash" />
            <div className={styles.portfolio}>
                <Image
                    src="/assets/vectors/warning.svg"
                    alt="warning"
                    width="200px"
                    height="200px"
                />
                <h2>Under Construction</h2>
                <p>This page will be live soon</p>
            </div>
        </>
    )
}

export default Portfolio
