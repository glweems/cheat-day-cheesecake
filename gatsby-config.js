require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: 'Cheat Day Cheesecake',
    description: 'Denton, tx local food truck',
    languageCode: 'en',
    countryCode: 'US',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    '@rhysforyou/gatsby-plugin-react-helmet-async',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        /* eslint-disable @typescript-eslint/camelcase */
        name: 'Cheat Day Cheesecake',
        short_name: 'cheesecake',
        start_url: '/',
        background_color: '#D9534F',
        theme_color: '#D9534F',
        display: 'minimal-ui',
        icon: 'src/assets/cheesecake.png',
        /* eslint-enable */
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/WrapRootElement.tsx`),
      },
    },
  ],
};
