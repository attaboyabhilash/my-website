import { useContext } from "react"
import Header from "../Header"
import Meta from "../../Meta"
import Footer from "../Footer"
import { ThemeContext } from "../../context/ThemeContext"
import styles from "./Layout.module.scss"

const Layout = props => {
    const { darkMode } = useContext(ThemeContext)
    return (
        <>
            <div
                className={
                    darkMode === "dark" ? styles.dark_mode : styles.light_mode
                }
            >
                <Meta />
                <Header />
                <div className={styles.layout}>{props.children}</div>
            </div>
            <Footer />
        </>
    )
}

export default Layout
