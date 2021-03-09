import Link from "next/link"
import Toggle from "../Toggle/Toggle"
import Image from "next/image"
import styles from "./Header.module.scss"

const Header = () => {
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
                </div>
            </div>
        </div>
    )
}

export default Header
