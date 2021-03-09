import { FaLinkedinIn, FaTwitter } from "react-icons/fa"
import styles from "./BlogMetaData.module.scss"

const BlogMetaData = ({ date, readMin }) => {
    return (
        <div className={styles.meta_data}>
            <p>
                Published - {date} | {readMin}
            </p>
            <p>
                <p>Share</p>
                <div className={styles.icons}>
                    <a
                        target="_blank"
                        href="https://twitter.com/attaboyabhilash"
                    >
                        <FaTwitter className={styles.twitter} />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/abhilash-negi-247644180/"
                    >
                        <FaLinkedinIn className={styles.linkedin} />
                    </a>
                </div>
            </p>
        </div>
    )
}

export default BlogMetaData
