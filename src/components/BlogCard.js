import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  border: 1px solid #dddddd;
`

const BlogCard = ({ date, description, title }) => (
  <Wrapper>
    <img src="https://picsum.photos/200" alt="Random" />
    <h2>{title}</h2>
    <p>{date}</p>
    <p>{description}</p>
  </Wrapper>
)

export default BlogCard
