module.exports = {
  siteMetadata: {
    title: `Back Pocket`,
    description: `A site for Back Pocket!`,
    author: `@mrcliffster`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Back Pocket Site`,
        short_name: `Back Pocket`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
