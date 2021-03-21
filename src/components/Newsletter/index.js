import { useState, useContext, useRef } from "react"
import { Form, Input, Button, message } from "antd"
import styles from "./Newsletter.module.scss"
import axios from "axios"
import { ThemeContext } from "../../context/ThemeContext"

const index = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { darkMode } = useContext(ThemeContext)
    const formRef = useRef()
    const [form] = Form.useForm()

    const onFinish = async values => {
        setIsLoading(true)
        try {
            const response = await axios.post("/api/addSubscribers", {
                email: values.email,
            })
            const returnedValue = await response
            if (
                returnedValue.data.message &&
                returnedValue.data.message === "Email already exist"
            ) {
                message.warning({
                    content: "You have already subscribed to the Newsletter!",
                })
            } else if (returnedValue.status === 200) {
                message.success({
                    content:
                        "You have successfully subscribed to the Newsletter!",
                })
            } else if (returnedValue.status === 500) {
                message.error({
                    content:
                        "There was an error while subscribing to the Newsletter!",
                })
            }
        } catch (error) {
            console.log("Error", error.message)
        }
        formRef.current !== null && formRef.current.resetFields()
        setIsLoading(false)
    }
    return (
        <div className={styles.main_block}>
            <h3 className={styles.title}>Join The Newsletter</h3>
            <small className={styles.sub_title} style={{ lineHeight: "0.9em" }}>
                Get updates everytime a blog is posted. You can unsubscribe at
                any time.
            </small>
            <Form
                className={styles.sub_form}
                layout="vertical"
                form={form}
                ref={formRef}
                onFinish={onFinish}
            >
                <Form.Item
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
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isLoading}
                    >
                        Subscribe
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default index
