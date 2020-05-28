module.exports = {
  siteMetadata: {
    title: `MegaBlocks Docs`,
    siteUrl: `https://apfm-actions.github.io/megablocksdocs`,
    description: `Your protal to learning APFM the Megablocks framework, maintained by the APFM Technical Operations team.`,
    components: {
      appbar: {
        position: "sticky",
        links: [
          {
            title: "Doc 1",
            url: "/megablocksdocs/doc1"
          },
          {
            title: "Doc 2",
            url: "/megablocksdocs/doc2"
          }
        ]
      },
      footer: {
        copyright: "www.aplaceformom.com",
        columns: [
          {
            heading: "APFM Public Github Actions",
            links: [
              {
                title: "Terraform Action Base",
                url: "github.com/apfm-actions/terraform-action-base"
              },
              {
                title: "Link 2",
                url: "#"
              },
              {
                title: "Link 3",
                url: "#"
              }
            ]
          },
          {
            heading: "Column 2",
            links: [
              {
                title: "Link A",
                url: "#"
              },
              {
                title: "Link B",
                url: "#"
              },
              {
                title: "Link C",
                url: "#"
              }
            ]
          },
          {
            heading: "Column 3",
            links: [
              {
                title: "Link x",
                url: "#"
              },
              {
                title: "Link y",
                url: "#"
              },
              {
                title: "Link z",
                url: "#"
              }
            ]
          }
        ]
      }
    },
    templates: {
      home: {
        totalPosts: 3,
        template: "home"
      },
      pages: {
        path: "/content/pages/",
        template: "page"
      },
      posts: {
        path: "/content/posts/",
        pathPrefix: "posts",
        template: "post",
        filters: {
          tag: {
            pathPrefix: "tag",
            template: "tag",
            totalPosts: 3,
            pagination: {
              template: "resultsTag",
              resultsPerPage: 6
            }
          }
        },
        pagination: {
          template: "resultsAll",
          resultsPerPage: 6
        }
      }
    }
  },
  plugins: [
    { resolve: `gatsby-theme-sky-lite` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sky Lite`,
        short_name: `SkyLite`,
        start_url: `/`,
        background_color: `rebeccapurple`,
        theme_color: `rebeccapurple`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      }
    }
  ]
};
