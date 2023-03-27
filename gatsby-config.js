/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `kiselyak`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    //   {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     "accessToken": "iQjIZcFBvHdravfMu-iigysdKa5X4EfQCsbLY4Cno7M",
    //     "spaceId": "md0rn1gshn2t"
    //   }
    // },
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
  ],
};
