/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config()
const path = require(`path`)
const firebase = require("firebase")
require("firebase/firestore")

module.exports = {
  siteMetadata: {
    title: `Competiton Landing Page`,
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `static/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
