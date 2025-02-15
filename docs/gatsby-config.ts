import { GatsbyConfig } from 'gatsby'

module.exports = {
  // TODO: You need pathPrefix if you're hosting GitHub Pages at a Project Pages or if your
  // site will live at a subdirectory like https://example.com/mypathprefix/.
  flags: {
    // DEV_SSR fixes a problem where `gatsby develop` is overwhelming the system memory
    // It's related to this issue: https://github.com/gatsbyjs/gatsby/issues/36899
    // More about DEV_SSR: https://www.gatsbyjs.com/docs/debugging-html-builds/#ssr-during-gatsby-develop
    // Eventually this needs to go away but likely not until the Gatsby webpack version is updated
    DEV_SSR: false,
  },
  pathPrefix: '/Fluvial-Geomorphology',
  siteMetadata: {
    title: `Fluvial Geomorphology`,
    author: {
      name: `Joe Wheaton`,
    },
    // TODO: Just leave `helpWidgetId` as an empty string ('') if you don't want the riverscapes help widget in the footer
    helpWidgetId: '',
    description: ``,
    siteUrl: `https://riverscapes.github.io/Fluvial-Geomorphology/`,
    social: {
      twitter: `RiverscapesC`,
    },
    menuLinks: [
      {
        title: 'Home',
        url: '/',
        items: [
          {
            title: 'Syllabus',
            url: '/syllabus',
          },
          {
            title: 'Course Topics',
            url: '/Course_Topics',
          },
          {
            title: 'Assignments',
            url: '/Assignments',
          },
       ],
      },
      {
        title: 'Canvas',
        url: 'https://usu.instructure.com/courses/778039'
      },
      {
        title: 'Riverscapes Consortium',
        url: 'https://riverscapes.net',
        items: [
          {
            title: 'Data Exchange',
            url: 'https://data.riverscapes.net'
          },
          {
            title: 'Support',
            url: 'https://riverscapes.freshdesk.com'
          },
          {
            title: 'QRiS',
            url: 'https://qris.riverscapes.net'
          }
        ],
      }
    ],
  },
  plugins: [
    {
      resolve: '@riverscapes/gatsby-theme',
      options: {
        contentPath: `${__dirname}/content/page`,
        manifest: {
          name: `Riverscapes Gatsby Template Site`,
          short_name: `RiverscapesTemplate`,
          // TODO: You need to change this to your site's URL. This should match the `pathPrefix` above.
          start_url: `/Fluvial-Geomorphology`,
        },
      },
    },
  ],
} as GatsbyConfig
