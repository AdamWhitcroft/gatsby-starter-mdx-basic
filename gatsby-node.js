const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

// Create and expose a slug field
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
      const value = createFilePath({ node, getNode })
      createNodeField({
          name: "slug",
          node,
          value: `${value}`,
      })
  }
}

// Create pages from MDX files
exports.createPages = async function({ actions, graphql, reporter }) {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('Failed to create posts: ', result.errors)
  }

  result.data.allMdx.edges.forEach( edge => {
    const slug = edge.node.fields.slug
    createPage({
      path: slug,
      component: require.resolve(`./src/pages/post.js`),
      context: { slug: slug },
    })
  })
}