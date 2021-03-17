import { useState, useEffect } from "react"
import Meta from "../../src/Meta"
import styles from "../../styles/About.module.scss"
import AboutDetailsCard from "../../src/components/AboutCard/AboutDetailsCard"
import ContactCard from "../../src/components/AboutCard/ContactCard"

const About = () => {
    const [transit, setTransit] = useState(false)
    const [transit2, setTransit2] = useState(false)
    const [scrollPositionYAXIS, setScrollPositionYAXIS] = useState(0)
    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPositionYAXIS(position)
    }

    useEffect(() => {
        setTimeout(() => {
            setTransit(true)
        }, 100)
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(() => {
        if (scrollPositionYAXIS > 190) {
            setTransit2(true)
        }
    })

    return (
        <>
            <Meta title="About | AttaboyAbhilash" />
            <div className={styles.about_me}>
                <h1>About Me</h1>
                <p>
                    Hi there, I am Abhilash Negi and I am a trained and
                    experienced Full-Stack developer. A little bit about me, I
                    have been studying Computer Science since 10th Standard. I
                    completed my graduation in Computer Science and started
                    working for Infosys Ltd. My keen interest in coding and
                    development made me practice the basics of Javascript on
                    regular basis and I realised that the art of problem solving
                    is what I do best. I believe that once my goal was clear,
                    the road ahead became much smoother.
                </p>
                <p>
                    The main language that I work with is Javascript in both
                    frontend and backend. In frontend I work with ReactJS,
                    NextJS, Redux, Context, Hooks, SCSS, Jest,
                    React-Testing-Library. In the backend, I work with NodeJS
                    and Express, and my choice of databases are MongoDB, MySQL,
                    Postgres. I am also interested in Machine Learning but
                    haven’t got a chance to practice it but I hope it happens in
                    future.
                </p>
                <div
                    className={styles.about_transit}
                    style={
                        transit
                            ? { transform: "translateX(0px)", opacity: 1 }
                            : { transform: "translateX(500px)", opacity: 0 }
                    }
                >
                    <AboutDetailsCard />
                </div>
                <div
                    className={styles.about_transit}
                    style={
                        transit2
                            ? { transform: "translateX(0px)", opacity: 1 }
                            : { transform: "translateX(-500px)", opacity: 0 }
                    }
                >
                    <ContactCard />
                </div>
            </div>
        </>
    )
}

export default About
