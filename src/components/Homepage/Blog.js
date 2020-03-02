import React from "react"
import { Wrapper, DefaultHeader } from "./styled"
import BlogCard from "../BlogCard"

const Blog = ({ markdownEntriesData }) => {
  return (
    <Wrapper>
      <DefaultHeader>Blog</DefaultHeader>
      {markdownEntriesData.allMarkdownRemark.edges.map(entry => {
        const {
          excerpt,
          fileAbsolutePath,
          timeToRead,
          frontmatter: { date, title },
        } = entry.node
        return (
          <BlogCard
            date={date}
            description={excerpt}
            urlPath={fileAbsolutePath}
            title={title}
          />
        )
      })}
    </Wrapper>
  )
}

export default Blog
