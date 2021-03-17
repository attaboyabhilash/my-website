import { createRef, useContext } from "react"
import { Form, Input, Button, Card, message } from "antd"
import styles from "./AboutCard.module.scss"
import { ThemeContext } from "../../context/ThemeContext"

function encode(data) {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
}

const ContactCard = () => {
    const { darkMode } = useContext(ThemeContext)
    const [form] = Form.useForm()
    const formRef = createRef()
    const { TextArea } = Input

    const onFinish = values => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-form", ...values }),
        })
            .then(() => formRef.current.resetFields())
            .then(() =>
                message.success({
                    content: "Your message was successfully delivered!",
                    style: {
                        marginTop: "30vh",
                    },
                })
            )
            .catch(error =>
                message.error({
                    content: "There was an error while sending your message.",
                    style: {
                        marginTop: "30vh",
                    },
                })
            )
    }
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
                <Form
                    layout="vertical"
                    form={form}
                    ref={formRef}
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onFinish={onFinish}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Name is required",
                            },
                        ]}
                    >
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
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                type: "email",
                                message: "Email Address is invalid",
                            },
                        ]}
                    >
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
                    <Form.Item
                        label="Subject"
                        name="subject"
                        rules={[
                            {
                                required: true,
                                message: "Subject is required",
                            },
                        ]}
                    >
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
                    <Form.Item
                        label="Your Message"
                        name="message"
                        rules={[
                            {
                                required: true,
                                message: "Message is required",
                            },
                        ]}
                    >
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
                        <Button type="primary" htmlType="submit">
                            SEND
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Card>
    )
}

export default ContactCard
