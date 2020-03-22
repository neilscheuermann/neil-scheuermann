import React from "react"
import { Wrapper, DefaultHeader } from "./styled"
import BlogCard from "../BlogCard"
import {
  BlogCardsWrapper,
  ContentWrapper,
} from "../StyledComponents/BlogComponentStyles"

const Blog = ({ markdownEntriesData }) => {
  return (
    <ContentWrapper>
      <DefaultHeader>Blog</DefaultHeader>
      <BlogCardsWrapper>
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
      </BlogCardsWrapper>
    </ContentWrapper>
  )
}

export default Blog
