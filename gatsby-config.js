module.exports = {
  siteMetadata: {
    title: 'Prizy | Larissa Developers meetup',
    meta: {
      description: 'Prizy is an app used for meetup lotteries',
      keywords: 'Prizy, Larissa Developers',
    },
  },
  pathPrefix: '/prizy_landing',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#950104',
        theme_color: '#950104',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
