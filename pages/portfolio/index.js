import Meta from "../../src/Meta"
import styles from "../../styles/Portfolio.module.scss"

const Portfolio = () => {
    return (
        <>
            <Meta title="Portfolio | AttaboyAbhilash" />
            This is Portfolio {process.env.PORT}
        </>
    )
}

export default Portfolio
