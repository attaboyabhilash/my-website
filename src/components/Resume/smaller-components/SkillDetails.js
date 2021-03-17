import styles from "../ResumeContent.module.scss"

function SkillDetails() {
    return (
        <div className={styles.left}>
            <h2>Skill Details</h2>
            <ul>
                <li>Vector Designing with Adobe Illustrator</li>
                <li>UI Design with Adobe Xd and Figma</li>
                <li>HTML5 and CSS3</li>
                <li>Modern Javascript | ES6 and ES7</li>
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>Redux</li>
                <li>React Router</li>
                <li>Context API</li>
                <li>REST and RESTful API</li>
                <li>Jest and React Testing Library</li>
                <li>Firebase and Firestore</li>
                <li>MongoDB, MySQL, Postgres</li>
            </ul>
        </div>
    )
}

export default SkillDetails
