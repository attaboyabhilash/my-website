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
                        <Image
                            src="/assets/vectors/Logo.svg"
                            alt="my-logo"
                            width="140px"
                            height="40px"
                        />
                    </Link>
                    <p>Full Stack Developer</p>
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
                    <Link href="/">Home</Link>
                    <div className={styles.footer_links}>
                        <Link href="/homepage">Homepage</Link>
                        <br />
                        <Link href="/resume">Hire Me</Link>
                        <br />
                        <Link href="/projects">Projects</Link>
                    </div>
                </div>
                <div className={styles.footer_link_head}>
                    <Link href="/about">About</Link>
                    <div className={styles.footer_links}>
                        <Link href="/about">About Me</Link>
                        <br />
                        <Link href="/resume">Resume</Link>
                        <br />
                        <Link href="/work-experience">Work Experience</Link>
                    </div>
                </div>
                <div className={styles.footer_link_head}>
                    <Link href="/conatct">Contact</Link>
                    <div className={styles.footer_links}>
                        <Link href="/contact_me">Contact Me</Link>
                        <br />
                        <Link href="/social">Social</Link>
                        <br />
                        <Link href="/sponser">Sponser</Link>
                    </div>
                </div>
                <div className={styles.footer_link_head}>
                    <Link href="/blogs">Blogs</Link>
                    <div className={styles.footer_links}>
                        <Link href="/recent-blogs">Recent Blogs</Link>
                        <br />
                        <Link href="/most">Most Read Blogs</Link>
                        <br />
                        <Link href="/first">First Blog</Link>
                    </div>
                </div>
                <div className={styles.footer_link_head}>
                    <Link href="/portfolio">Portfolio</Link>
                    <div className={styles.footer_links}>
                        <Link href="/javascript">Javascript</Link>
                        <br />
                        <Link href="/react">ReactJS</Link>
                        <br />
                        <Link href="/react-test">React Testing</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
