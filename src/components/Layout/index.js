import { useContext } from "react"
import Header from "../Header"
import Meta from "../../Meta"
import Footer from "../Footer"
import styles from "./Layout.module.scss"
import { ThemeContext } from "../../context/ThemeContext"

const Layout = props => {
    const { darkMode } = useContext(ThemeContext)
    return (
        <>
            <div className={darkMode ? styles.dark_mode : styles.light_mode}>
                <Meta />
                <Header />
                <div className={styles.layout}>{props.children}</div>
            </div>
            <Footer />
        </>
    )
}

export default Layout
