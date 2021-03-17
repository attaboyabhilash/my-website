import Link from "next/link"
import Image from "next/image"
import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa"
import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.flexer}>
                <div className={styles.footer_left}>
                    <Link href="/">
                        <a>
                            <Image
                                src="/assets/vectors/Logo.svg"
                                alt="my-logo"
                                width="140px"
                                height="40px"
                            />
                        </a>
                    </Link>
                    <p>Full Stack Developer</p>
                    <div className={styles.small_nav}>
                        <p>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </p>
                        <p>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </p>
                        <p>
                            <Link href="/blogs">
                                <a>Blogs</a>
                            </Link>
                        </p>
                        <p>
                            <Link href="/portfolio">
                                <a>Portfolio</a>
                            </Link>
                        </p>
                    </div>
                    <p>
                        Copyright &copy; 2021 attaboyabhilash.com, <br /> All
                        Rights Reserved.
                    </p>
                    <div className="icons">
                        <a
                            target="_blank"
                            href="https://www.instagram.com/attaboyabhilash/"
                        >
                            <FaInstagram className={styles.insta} />
                        </a>
                        <a
                            target="_blank"
                            href="https://twitter.com/attaboyabhilash"
                        >
                            <FaTwitter className={styles.twitter} />
                        </a>
                        <a
                            target="_blank"
                            href="https://github.com/attaboyabhilash"
                        >
                            <FaGithub className={styles.github} />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/abhilash-negi-247644180/"
                        >
                            <FaLinkedinIn className={styles.linkedin} />
                        </a>
                    </div>
                </div>
                <div className={styles.footer_seperator}></div>
                <div className={styles.footer_link_head}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <div className={styles.footer_links}>
                        <Link href="/">
                            <a>Homepage</a>
                        </Link>
                        <br />
                        <Link href="/resume">
                            <a>Hire Me</a>
                        </Link>
                        <br />
                        <Link href="/portfolio">
                            <a>Projects</a>
                        </Link>
                    </div>
                </div>
                <div className={styles.footer_link_head}>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    <div className={styles.footer_links}>
                        <Link href="/about">
                            <a>About Me</a>
                        </Link>
                        <br />
                        <Link href="/resume">
                            <a>Resume</a>
                        </Link>
                        <br />
                        <Link href="/portfolio">
                            <a>Work Experience</a>
                        </Link>
                    </div>
                </div>
                <div className={styles.footer_link_head}>
                    <Link href="/about">
                        <a>Contact</a>
                    </Link>
                    <div className={styles.footer_links}>
                        <Link href="/about">
                            <a>Contact Me</a>
                        </Link>
                        <br />
                        <Link href="/social">
                            <a>Social</a>
                        </Link>
                        <br />
                        <Link href="/sponser">
                            <a>Sponser</a>
                        </Link>
                    </div>
                </div>
                <div className={styles.footer_link_head}>
                    <Link href="/blogs">
                        <a>Blogs</a>
                    </Link>
                    <div className={styles.footer_links}>
                        <Link href="/blogs">
                            <a>Recent Blogs</a>
                        </Link>
                        <br />
                        <Link href="/blogs">
                            <a>Most Read Blogs</a>
                        </Link>
                        <br />
                        <Link href="/blog/how-to-structure-your-react-application">
                            <a>First Blog</a>
                        </Link>
                    </div>
                </div>
                <div className={styles.footer_link_head}>
                    <Link href="/portfolio">
                        <a>Portfolio</a>
                    </Link>
                    <div className={styles.footer_links}>
                        <Link href="/portfolio">
                            <a>Javascript</a>
                        </Link>
                        <br />
                        <Link href="/portfolio">
                            <a>ReactJS</a>
                        </Link>
                        <br />
                        <Link href="/portfolio">
                            <a>React Testing</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
