import { FaLinkedinIn, FaTwitter } from "react-icons/fa"
import styles from "./BlogMetaData.module.scss"

const BlogMetaData = ({ date, readMin, url, title, tags }) => {
    return (
        <div className={styles.meta_data}>
            <h4>
                Published - {date} | {readMin}
            </h4>
            <h4>
                <h4>Share | </h4>
                <div className={styles.icons}>
                    <a
                        target="_blank"
                        href={`https://twitter.com/intent/tweet?text=${title}&via=attaboyabhilash&url=${url}&hashtags=${
                            tags && tags.map(tag => tag)
                        }`}
                    >
                        <FaTwitter className={styles.twitter} />
                    </a>
                    <a
                        target="_blank"
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
                    >
                        <FaLinkedinIn className={styles.linkedin} />
                    </a>
                </div>
            </h4>
        </div>
    )
}

export default BlogMetaData
