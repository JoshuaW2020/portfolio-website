/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Joshua Walsh - SWE`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": `images`,
      "path": `${__dirname}/src/assets/images`
    },
    __key: "images"
  }]
};