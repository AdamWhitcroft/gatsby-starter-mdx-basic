import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from '../components/seo'

const PostPage = ({ data }) => {
  const post = data.mdx
  return (
    <Layout>
      <SEO title={ post.frontmatter.title }/>
      <h1>{ post.frontmatter.title }</h1>
      <p>This is the post template. Edit it in <code>src/pages/post.js</code>.</p>
      <MDXRenderer>{ post.body }</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`

export default PostPage