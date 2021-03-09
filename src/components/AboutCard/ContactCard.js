import { useContext } from "react"
import { Form, Input, Button, Card } from "antd"
import styles from "./AboutCard.module.scss"
import { ThemeContext } from "../../context/ThemeContext"

const AboutDetailsCard = () => {
    const { darkMode } = useContext(ThemeContext)
    const [form] = Form.useForm()
    const { TextArea } = Input
    return (
        <Card
            hoverable
            className={styles.about_card}
            style={
                darkMode
                    ? {
                          backgroundColor: "#212121",
                          borderColor: "#191919",
                      }
                    : {
                          backgroundColor: "#FFF",
                          borderColor: "#f0f0f0",
                      }
            }
        >
            <div className={styles.contact_form}>
                <h3>Contact</h3>
                <Form layout="vertical" form={form}>
                    <Form.Item label="Name">
                        <Input
                            placeholder="ex. John Doe"
                            style={
                                darkMode
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
                        />
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input
                            placeholder="someone@example.com"
                            style={
                                darkMode
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
                        />
                    </Form.Item>
                    <Form.Item label="Subject">
                        <Input
                            placeholder="Let’s get in touch..."
                            style={
                                darkMode
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
                        />
                    </Form.Item>
                    <Form.Item label="Your Message">
                        <TextArea
                            rows={4}
                            placeholder="Hi Abhilash, ......"
                            style={
                                darkMode
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
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">SEND</Button>
                    </Form.Item>
                </Form>
            </div>
        </Card>
    )
}

export default AboutDetailsCard
