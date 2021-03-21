import { useContext } from "react"
import { Carousel } from "antd"
import styles from "./Projects.module.scss"
import { ThemeContext } from "../../context/ThemeContext"
import ProjectCard from "./ProjectCard"
import projects from "./projects.json"

const index = () => {
    const { darkMode } = useContext(ThemeContext)
    return (
        <div className={styles.margin_div}>
            {projects.map(project => {
                return (
                    <ProjectCard
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                )
            })}
        </div>
    )
}

export default index
