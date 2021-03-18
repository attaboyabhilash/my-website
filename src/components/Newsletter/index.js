import { useState, useContext, useRef } from "react"
import { Form, Input, Button } from "antd"
import styles from "./Newsletter.module.scss"
import { ThemeContext } from "../../context/ThemeContext"

const index = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { darkMode } = useContext(ThemeContext)
    const formRef = useRef()
    const [form] = Form.useForm()

    const onFinish = values => {
        setIsLoading(true)
        console.log(values)
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
