import { useContext } from "react"
import { Pre, Line, LineNo, LineContent } from "./styles"
import Highlight, { defaultProps } from "prism-react-renderer"
import darkTheme from "prism-react-renderer/themes/vsDark"
import lightTheme from "prism-react-renderer/themes/vsLight"
import { ThemeContext } from "../context/ThemeContext"

const PreWrapper = props => {
    const { darkMode } = useContext(ThemeContext)
    return (
        <Highlight
            {...defaultProps}
            theme={darkMode === "dark" ? darkTheme : lightTheme}
            code={props.code.trim()}
            language={props.language}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre
                    className={className}
                    style={
                        darkMode === "dark"
                            ? { backgroundColor: "#121212" }
                            : { backgroundColor: "#eee" }
                    }
                >
                    {tokens.map((line, i) => (
                        <Line
                            key={i}
                            {...getLineProps({ line, key: i })}
                            style={{ lineHeight: "1.8em" }}
                        >
                            <LineNo>{i + 1}</LineNo>
                            <LineContent>
                                {line.map((token, key) => (
                                    <span
                                        key={key}
                                        {...getTokenProps({ token, key })}
                                    />
                                ))}
                            </LineContent>
                        </Line>
                    ))}
                </Pre>
            )}
        </Highlight>
    )
}

export default PreWrapper
