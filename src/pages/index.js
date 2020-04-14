import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <h1>All posts</h1>
      {posts.map(({ node: post }) => (
        <div key={ post.id }>
          <h3>{ post.frontmatter.title }</h3>
          <p>{ post.frontmatter.date }</p>
          <Link to={ post.fields.slug }>Keep reading&hellip;</Link>
        </div>
      ))}
    </Layout>
  )

}

export const query = graphql`
  query {
    allMdx {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage