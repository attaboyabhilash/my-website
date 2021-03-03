import Head from "next/head"

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: "Home | AttaboyAbhilash",
    keywords:
        "Web Development, Hire Candidate, Projects, Coding, Programming, MERN",
    description:
        "Hi There, I am Abhilash Negi, and I am full stack developer. I use various technologies such as HTML, CSS, Javascript, React, Redux, NodeJs, Express, NextJs, Jest, Typescript. Feel free to contact me if you are looking for a full stack MERN developer",
}

export default Meta
