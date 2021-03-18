import { useContext } from "react"
import { Form, Input, Button } from "antd"
import styles from "./Newsletter.module.scss"
import { ThemeContext } from "../../context/ThemeContext"

const index = () => {
    const { darkMode } = useContext(ThemeContext)
    return (
        <div className={styles.main_block}>
            <h3 className={styles.title}>
                Get updates everytime a blog is posted
            </h3>
            <Form className={styles.sub_form}>
                <Input
                    style={
                        darkMode === "dark"
                            ? {
                                  backgroundColor: "#333",
                                  color: "#f4f4f4",
                                  borderColor: "#333",
                              }
                            : {
                                  backgroundColor: "#FFF",
                                  color: "#000",
                                  borderColor: "#d9d9d9",
                              }
                    }
                    placeholder="someone@example.com"
                />
                <Button type="primary">Subscribe</Button>
            </Form>
            <small className={styles.sub_title}>
                You can unsubscribe at any time.
            </small>
        </div>
    )
}

export default index
