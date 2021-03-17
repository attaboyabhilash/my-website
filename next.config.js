const withMDX = require("@next/mdx")()

module.exports = withMDX({
    pageExtensions: ["js", "mdx"],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ],
    },
})
