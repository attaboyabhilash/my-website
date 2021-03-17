import styles from "../ResumeContent.module.scss"

function Trainings() {
    return (
        <div className={styles.right}>
            <h2>Trainings</h2>
            <ul>
                <li>
                    Modern Javascript ES6 and ES7 training by <span>Udemy</span>
                </li>
                <hr />
                <li>
                    Front End Libraries training by <span>FreeCodeCamp</span>
                </li>
                <hr />
                <li>
                    Front End Developer with ReactJS training by{" "}
                    <span>Scrimba</span>
                </li>
                <hr />
            </ul>
        </div>
    )
}

export default Trainings
