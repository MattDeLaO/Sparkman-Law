module.exports = {
  siteMetadata: {
    title: `Sparkman Law Firm PLLC`,
    description: `Criminal and Traffic defense law firm offering convenience and unparalleled legal experience in Northwest Arkansas`,
    url: `http://sarahsparkmanlaw.com/`,
    author: `Sparkman Law Firm PLLC`,
    image: './images/SparkmanLogoFull.png',
    keywords: `Sparkman Law, Sparkman Law Firm, Sarah Sparkman, Sarah attorney, criminal lawyer, Fayetteville, legal service, NWA attorney, traffic law `,
    menuLinks: [
      {
        name: 'Services',
        link: 'Services',
      },
      {
        name: 'About',
        link: 'About',
      },
      {
        name: 'Why Sparkman Law?',
        link: 'WhySparkmanLaw',
      },
      {
        name: 'Contact',
        link: 'Contact',
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Libre Baskerville', 'Quicksand']
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sparkman Law Firm PLLC`,
        short_name: `Sparkman Law`,
        start_url: `/`,
        icon: `src/images/SparkmanLogo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
