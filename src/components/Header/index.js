import { useState, useContext } from "react"
import Link from "next/link"
import Toggle from "../Toggle/Toggle"
import Image from "next/image"
import styles from "./Header.module.scss"
import { IoMenuOutline } from "react-icons/io5"
import { Drawer } from "antd"
import { ThemeContext } from "../../context/ThemeContext"
import Arrow from "../Arrow"

const Header = () => {
    const { darkMode } = useContext(ThemeContext)
    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    }

    const onClose = () => {
        setVisible(false)
    }

    return (
        <div className={styles.header}>
            <div className={styles.flexer}>
                <Link href="/">
                    <a>
                        <Image
                            src="/assets/vectors/Logo.svg"
                            alt="my-logo"
                            width="140px"
                            height="70px"
                            className={styles.main_logo}
                            priority
                        />
                    </a>
                </Link>
                <div className={styles.links}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    <Link href="/blogs">
                        <a>Blogs</a>
                    </Link>
                    <Link href="/portfolio">
                        <a>Portfolio</a>
                    </Link>
                    <Toggle />
                    {darkMode === "light" ? <Arrow /> : null}
                </div>
                <div className={styles.menu_bar} onClick={showDrawer}>
                    <IoMenuOutline />
                </div>
                <Drawer
                    placement="right"
                    closable={true}
                    onClose={onClose}
                    visible={visible}
                    headerStyle={
                        darkMode === "dark"
                            ? { backgroundColor: "#333" }
                            : { backgroundColor: "#FFF" }
                    }
                    drawerStyle={
                        darkMode === "dark"
                            ? { backgroundColor: "#333" }
                            : { backgroundColor: "#FFF" }
                    }
                >
                    <p onClick={onClose}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </p>
                    <p onClick={onClose}>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </p>
                    <p onClick={onClose}>
                        <Link href="/blogs">
                            <a>Blogs</a>
                        </Link>
                    </p>
                    <p onClick={onClose}>
                        <Link href="/portfolio">
                            <a>Portfolio</a>
                        </Link>
                    </p>
                    <Toggle />
                </Drawer>
            </div>
        </div>
    )
}

export default Header
