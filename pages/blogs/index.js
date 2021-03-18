import { useContext } from "react"
import { Card, Tag, Tooltip } from "antd"
import Link from "next/link"
import MetaNew from "../../src/Meta"
import styles from "../../styles/Blogs.module.scss"
import blogData from "../../src/utils/blogData.json"
import Newsletter from "../../src/components/Newsletter"
import { ThemeContext } from "../../src/context/ThemeContext"

const Blogs = () => {
    const { darkMode } = useContext(ThemeContext)
    const { Meta } = Card

    return (
        <>
            <MetaNew title="Blogs | AttaboyAbhilash" />
            <h2 className={styles.blog_heading}>Blogs</h2>
            <div className={styles.blog_grid}>
                {blogData.map(post => {
                    return (
                        <Card
                            key={post.id}
                            style={
                                darkMode === "dark"
                                    ? {
                                          width: 300,
                                          margin: "30px auto",
                                          backgroundColor: "#212121",
                                          borderColor: "#191919",
                                      }
                                    : {
                                          width: 300,
                                          margin: "30px auto",
                                          backgroundColor: "#fff",
                                          borderColor: "#f0f0f0",
                                      }
                            }
                            cover={<img alt={post.id} src={post.thumbnail} />}
                            actions={[
                                <span>
                                    <a>{post.readMin} min read</a>
                                </span>,

                                <Link href={`blog/${post.slug}`}>
                                    Read More
                                </Link>,
                            ]}
                            hoverable
                        >
                            <Tooltip
                                title={post.title}
                                color={"#000"}
                                placement="right"
                            >
                                <Meta title={post.title} />
                            </Tooltip>
                            <div className={styles.meta_data}>
                                <small>Published - {post.pubDate}</small>
                                <Tooltip
                                    title={post.description}
                                    color={"#000"}
                                    placement="right"
                                >
                                    <p>
                                        {post.description.slice(0, 150) + "..."}
                                    </p>
                                </Tooltip>
                            </div>
                            <div className={styles.tags}>
                                {post.tags.map(cat => {
                                    return (
                                        <Tag
                                            style={
                                                darkMode === "dark"
                                                    ? {
                                                          backgroundColor:
                                                              "#000",
                                                          borderColor: "#000",
                                                          color: "#fff",
                                                      }
                                                    : {
                                                          backgroundColor:
                                                              "#ddd",
                                                          borderColor: "#ddd",
                                                          color: "#000",
                                                      }
                                            }
                                            key={post.tags.indexOf(cat)}
                                        >
                                            {cat}
                                        </Tag>
                                    )
                                })}
                            </div>
                        </Card>
                    )
                })}
            </div>
            {/* <Newsletter /> */}
        </>
    )
}

export default Blogs
