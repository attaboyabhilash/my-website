import { useContext } from "react"
import { Card, Tooltip } from "antd"
import styles from "./Projects.module.scss"
import { ThemeContext } from "../../context/ThemeContext"

const ProjectCard = ({ image, title, description, link }) => {
    const { darkMode } = useContext(ThemeContext)

    return (
        <Card
            hoverable
            className={styles.ant_card}
            style={
                darkMode === "dark"
                    ? {
                          width: 240,
                          margin: "30px auto",
                          backgroundColor: "#212121",
                          borderColor: "#191919",
                      }
                    : {
                          width: 240,
                          margin: "30px auto",
                          backgroundColor: "#fff",
                          borderColor: "#f0f0f0",
                      }
            }
            cover={<img alt={title} src={image} />}
        >
            <div className={styles.ant_body}>
                <Tooltip title={title} color={"#000"} placement="right">
                    <h3>{title.slice(0, 21) + "..."}</h3>
                </Tooltip>
                <Tooltip title={description} color={"#000"} placement="right">
                    <p>{description.slice(0, 75) + "..."}</p>
                </Tooltip>
            </div>
            <div className={styles.action}>
                <a href={link} target="_blank">
                    View Project {" >"}
                </a>
            </div>
        </Card>
    )
}

export default ProjectCard
