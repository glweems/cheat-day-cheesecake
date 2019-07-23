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
    {
      resolve: `gatsby-source-facebook-graphql`,
      options: {
        pageId: 1690402924350633,
        params: {
          fields: [
            'about',
            'bio',
            'category',
            'category_list',
            'company_overview',
            'features',
            'hours',
            'phone',
            'location',
            'username',
            'description',
            'products',
            'photos{webp_images}',
            'rating_count',
            'place_type',
          ],
        },
        accessToken: process.env.GATSBY_FACEBOOK_GRAPH_TOKEN,
      },
    },
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

    // {
    //   resolve: `gatsby-source-facebook`,
    //   options: {
    //     places: [1690402924350633], // Can be either a numeric ID or the URL ID
    //     params: {
    //       fields: 'about', // See Facebooks API to see what you can query for
    //     },
    //     key: process.env.GATSBY_FACEBOOK_GRAPH_TOKEN, // You will need to create a Facebook application and go through review in order to get an API token.
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-graphql',
    //   options: {
    //     typeName: 'GitHub',
    //     fieldName: 'github',
    //     // Url to query from
    //     url: 'https://graph.facebook.com/v3.3/1690402924350633',
    //     // HTTP headers
    //     headers: {
    //       // Learn about environment variables: https://gatsby.dev/env-vars
    //       Authorization: `bearer ${process.env.GATSBY_FACEBOOK_GRAPH_API}`,
    //     },
    //     // Additional options to pass to node-fetch
    //     fetchOptions: {},
    //   },
    // },
  ],
};
