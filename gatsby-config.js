module.exports = {
  siteMetadata: {
    title: 'Papahānaumokuākea Project',
  },
  plugins: [
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              path: `${__dirname}/src/pages`,
              name: 'pages',
          },
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `img`,
              path: `${__dirname}/src/img`,
          }
      },
      {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
              trackingId: "UA-117103650-1",
              // Puts tracking script in the head instead of the body
              head: true,
              // Setting this parameter is optional
              anonymize: true,
              // Setting this parameter is also optional
              respectDNT: true,
          },
      },
      {
          resolve: 'gatsby-plugin-mailchimp',
          options: {
              endpoint: 'https://patrickteachingart.us11.list-manage.com/subscribe/post?u=00bb906f4310de403db0d029c&amp;id=a3f38ddde1', // see instructions section below
          },
      },
      'gatsby-plugin-react-helmet',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      'gatsby-plugin-styled-components',
    ],
};
