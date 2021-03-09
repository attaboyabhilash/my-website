import React, { useState, useEffect } from "react"
import ThemeContextProvider from "../src/context/ThemeContext"
import { useRouter } from "next/router"
import Layout from "../src/components/Layout"
import { Spin } from "antd"
import "../styles/globals.scss"
import "antd/dist/antd.css"

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter()
    const [pageLoading, setPageLoading] = useState(false)

    useEffect(() => {
        const handleStart = () => {
            setPageLoading(true)
        }
        const handleComplete = () => {
            setPageLoading(false)
        }

        router.events.on("routeChangeStart", handleStart)
        router.events.on("routeChangeComplete", handleComplete)
        router.events.on("routeChangeError", handleComplete)
    }, [router])

    return (
        <ThemeContextProvider>
            <Layout>
                {pageLoading ? (
                    <Spin size="large" />
                ) : (
                    <Component {...pageProps} />
                )}
            </Layout>
        </ThemeContextProvider>
    )
}

export default MyApp
