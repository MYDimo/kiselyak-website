/**
 * @type {import('gatsby').GatsbyConfig}
 */

const dotenv = require("dotenv")

if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `kiselyak`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
      {
      resolve: 'gatsby-source-contentful',
      options: {
        "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
        "spaceId": process.env.CONTENTFUL_SPACE_ID
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-snipcart-advanced",
      options: {
        publicApiKey: "MmFlZGEzY2QtNmM2Yy00NTM1LWJkY2ItMzNmOGM4OTkwMTliNjM4MTU1NDEzMTkyMjY1NTUy"
      }
    }
  ],
};
