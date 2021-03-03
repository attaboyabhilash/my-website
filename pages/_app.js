import ThemeContextProvider from "../src/context/ThemeContext"
import Layout from "../src/components/Layout"
import "../styles/globals.scss"

const MyApp = ({ Component, pageProps }) => {
    return (
        <ThemeContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeContextProvider>
    )
}

export default MyApp
