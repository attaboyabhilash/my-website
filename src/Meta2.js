import Head from "next/head"

const Meta = ({ title, description, image, url }) => {
    return (
        <Head>
            {/* LinkedIn */}
            <meta property="og:title" content={title} />
            <meta property="og:image" content={image} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@attaboyabhilash" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    )
}

Meta.defaultProps = {
    title: "Blogs | AttaboyAbhilash",
    description:
        "Hi There, I am Abhilash Negi, and I am full stack developer. I use various technologies such as HTML, CSS, Javascript, React, Redux, NodeJs, Express, NextJs, Jest, Typescript. Feel free to contact me if you are looking for a full stack MERN developer",
    image:
        "https://images.unsplash.com/photo-1573801209310-61a724e4052a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80.jpg",
    url: "https://www.attaboyabhilash.com/",
}

export default Meta
