const withMDX = require("@next/mdx")()

module.exports = withMDX({
  pageExtensions: ["js", "mdx"],
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/blogs",
        permanent: true,
      },
    ]
  },
})
