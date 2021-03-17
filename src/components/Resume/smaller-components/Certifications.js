import styles from "../ResumeContent.module.scss"

function Certifications() {
    return (
        <div className={styles.right}>
            <h2>Certifications</h2>
            <ul>
                <li>
                    Modern Javascript ES6 and ES7 Certificate by Udemy. <br />
                    Certificate Link:{" "}
                    <a
                        target="blank"
                        href="https://www.udemy.com/certificate/UC-45f68f9e-1dd3-4172-8abd-69390bd62241/"
                    >
                        https://www.udemy.com/certificate/UC-45f68f9e-1dd3-4172-8abd-69390bd62241/
                    </a>
                </li>
                <li>
                    Front End Libraries Certificate by FreeCodeCamp.
                    <br />
                    Certificate Link:{" "}
                    <a
                        target="blank"
                        href="https://www.freecodecamp.org/certification/attaboyabhilash/front-end-libraries"
                    >
                        https://www.freecodecamp.org/certification/
                        <br />
                        attaboyabhilash/front-end-libraries
                    </a>
                </li>
                <li>
                    Front End Developer with ReactJS Certificate by Scrimba.
                    <br />
                    Certificate Link:{" "}
                    <a
                        target="blank"
                        href="https://scrimba.com/certificate/ug9EvyC7/gfrontend"
                    >
                        https://scrimba.com/certificate/ug9EvyC7/gfrontend
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Certifications
