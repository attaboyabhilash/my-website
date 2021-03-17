import styles from "../ResumeContent.module.scss"

function Education() {
    return (
        <div className={styles.right}>
            <h2>Education Details</h2>
            <ul>
                <li>
                    St. Joseph’s Degree and PG College - &nbsp;April 2018
                    <br />
                    <small>BSc in Computer Science - 94.1%</small>
                    <hr />
                </li>
                <li>
                    Rashtriya Military School, Chail - &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp;April 2015
                    <br />
                    <small>12th Standard - 69.6%</small>
                    <hr />
                </li>
                <li>
                    Rashtriya Military School, Chail - &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp;April 2013
                    <br />
                    <small>10th Standard - 9.0 GPA</small>
                    <hr />
                </li>
            </ul>
        </div>
    )
}

export default Education
