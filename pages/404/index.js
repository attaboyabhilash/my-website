import { Result, Button } from "antd"
import { useRouter } from "next/router"
import styles from "../../styles/404.module.scss"

const fourohfour = () => {
    const router = useRouter()
    return (
        <div className={styles.not_found}>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Button type="primary" onClick={() => router.push("/")}>
                        Back Home
                    </Button>
                }
            />
        </div>
    )
}

export default fourohfour
