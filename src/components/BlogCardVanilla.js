import React from "react"
import { Link } from "gatsby"
import Chip from "./UI/Chip"
import Button from "./UI/Button"
import {
  BlogCardWrapper,
  ImageWrapper,
  TextContentWrapper,
  ButtonWrapper,
  BlogCardHeader,
} from "./StyledComponents/BlogCardStyles"

const BlogCardVanilla = ({ date, description, title, urlPath }) => {
  return (
    <BlogCardWrapper>
      <ImageWrapper
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/ec/8e/29/ec8e29e68439e18d6e0eb0ab0a297518.jpg')",
        }}
      />
      <Chip>vim</Chip>
      <Chip>javascript</Chip>
      <TextContentWrapper>
        <Link to={`/blog/${urlPath}`}>
          <BlogCardHeader>{title}</BlogCardHeader>
        </Link>
        <p>{date}</p>
        <p>{description}</p>
      </TextContentWrapper>
      <ButtonWrapper>
        <Button>share</Button>
      </ButtonWrapper>
    </BlogCardWrapper>
  )
}

export default BlogCardVanilla
