import { useState, useRef, useContext } from "react"
import { Form, Input, Button, Card, message } from "antd"
import emailjs from "emailjs-com"
import styles from "./AboutCard.module.scss"
import { ThemeContext } from "../../context/ThemeContext"

const ContactCard = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { darkMode } = useContext(ThemeContext)
    const [form] = Form.useForm()
    const formRef = useRef()
    const { TextArea } = Input

    const onFinish = values => {
        setIsLoading(true)
        emailjs
            .send(
                "service_sdasfoa",
                "template_g2gd5qp",
                values,
                "user_RGIAuejdUyP5Xaeo3BKsn"
            )
            .then(result => {
                if (result.text === "OK") {
                    message.success({
                        content: "Your message was successfully delivered!",
                    })
                    setIsLoading(false)
                    formRef.current !== null && formRef.current.resetFields()
                } else {
                    message.error({
                        content:
                            "There was an error while sending your message.",
                    })
                    setIsLoading(false)
                    formRef.current !== null && formRef.current.resetFields()
                }
            })
            .catch(error => console.log(error))
        setIsLoading(false)
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
                    onFinish={onFinish}
                >
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
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={isLoading}
                        >
                            SEND
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Card>
    )
}

export default ContactCard
