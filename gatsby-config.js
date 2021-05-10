
module.exports = {
  siteMetadata: {
    title: `Text from gatsby-config.js`,
    description: `This description is from gatsby-config.js`,
    author: `Kuba Modzelik`,
  },
  plugins: [

    // seo - head tag
    `gatsby-plugin-react-helmet`,
    
    // styling
    `gatsby-plugin-styled-components`,

    // sass
    {
      resolve: `gatsby-plugin-sass`,
      // options: {
      //   cssLoaderOptions: {
      //     camelCase: false,
      //   },
      // },
    },

    // Link component for router
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },

    // images
    `gatsby-plugin-image`,
    
    // images - lazy loading
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    // markdowns
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-gatsby-cloud`,
    
    `gatsby-plugin-offline`,
  ],
}
