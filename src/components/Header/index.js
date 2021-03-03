import Link from "next/link"
import Toggle from "../Toggle/Toggle"
import Image from "next/image"
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.flexer}>
                <Link href="/">
                    <Image
                        src="/assets/vectors/Logo.svg"
                        alt="my-logo"
                        width="140px"
                        height="70px"
                        className={styles.main_logo}
                    />
                </Link>
                <div className={styles.links}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blogs">Blogs</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Toggle />
                </div>
            </div>
        </div>
    )
}

export default Header
