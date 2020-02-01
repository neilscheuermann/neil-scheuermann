import React from "react"
import { graphql } from "gatsby"
import MarkdownBlogLayout from "../components/MarkdownBlogLayout"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <MarkdownBlogLayout>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </MarkdownBlogLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
