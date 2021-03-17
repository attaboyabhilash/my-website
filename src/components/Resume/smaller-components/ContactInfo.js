import styles from "../ResumeContent.module.scss"

function ContactInfo() {
    return (
        <div className={styles.left}>
            <h2>Contact Information</h2>
            <ul>
                <li>Phone No: +91 – 8374115396</li>
                <li>
                    Email ID:{" "}
                    <a target="blank" href="mailto:abhi.negi.3609@gmail.com">
                        abhi.negi.3609@gmail.com
                    </a>
                </li>
                <li>
                    GitHub:{" "}
                    <a target="blank" href="https://github.com/attaboyabhilash">
                        https://githhub.com/attaboyabhilash
                    </a>
                </li>
                <li>
                    LinkedIn:{" "}
                    <a
                        target="blank"
                        href="https://www.linkedin.com/in/abhilash-negi-247644180/"
                    >
                        https://linkedin.com/in/abhilash-negi-247644180/
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ContactInfo
