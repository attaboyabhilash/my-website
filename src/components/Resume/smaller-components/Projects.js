import styles from "../ResumeContent.module.scss"

function Projects() {
    return (
        <div className={styles.left}>
            <h2>Projects</h2>
            <ul>
                <li>
                    Bubbles Application | Social Media App with React and
                    Firebase. <br />
                    App Link:{" "}
                    <a target="blank" href="https://bubbles-ee7dc.web.app/">
                        https://bubbles-ee7dc.web.app/
                    </a>
                </li>
                <li>
                    Netflix Clone Application with React and Firebase.
                    <br />
                    App Link:{" "}
                    <a
                        target="blank"
                        href="https://netflix-clone-3609.web.app/"
                    >
                        https://netflix-clone-3609.web.app/
                    </a>
                </li>
                <li>
                    Movie Search App with React and TMDb API <br />
                    App Link:{" "}
                    <a
                        target="blank"
                        href="https://attaboyabhilash.github.io/movieSearchApp/"
                    >
                        https://attaboyabhilash.github.io/movieSearchApp/
                    </a>
                </li>
                <li>
                    Pomodoro Clock with React, hosted on Github Pages.
                    <br />
                    App Link:{" "}
                    <a
                        target="blank"
                        href="https://attaboyabhilash.github.io/pomodoroClock/"
                    >
                        https://attaboyabhilash.github.io/pomodoroClock/
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Projects
