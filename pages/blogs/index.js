import Meta from "../../src/Meta"
import styles from "../../styles/Blogs.module.scss"

const Blogs = () => {
    return (
        <>
            <Meta title="Blogs | AttaboyAbhilash" />
            This is Blogs {process.env.PORT}
        </>
    )
}

export default Blogs
