import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { Tag } from "antd"

const index = ({ tags }) => {
    const { darkMode } = useContext(ThemeContext)
    return tags.map(tag => {
        return (
            <Tag
                style={
                    darkMode
                        ? {
                              backgroundColor: "#000",
                              borderColor: "#000",
                              color: "#fff",
                          }
                        : {
                              backgroundColor: "#ddd",
                              borderColor: "#ddd",
                              color: "#000",
                          }
                }
                key={tags.indexOf(tag)}
            >
                {tag}
            </Tag>
        )
    })
}

export default index
