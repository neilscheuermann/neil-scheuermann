import React from "react"
import styled from "styled-components"
import Chip from "./UI/Chip"
import Button from "./UI/Button"

const BlogCardWrapper = styled.div`
  max-width: 300px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`

const ImageWrapper = styled.div`
  width: 300px;
  height: 140px;
  background-position: center center;
  background-repeat: no-repeat;
`

const TextContentWrapper = styled.div`
  padding: 16px;
`

const ButtonWrapper = styled.div`
  margin: 16px;
`

const Header = styled.h2`
  margin-bottom: 0.35em;
`

const BlogCardVanilla = ({ date, description, title, urlPath }) => {
  return (
    <BlogCardWrapper>
      <ImageWrapper
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/ec/8e/29/ec8e29e68439e18d6e0eb0ab0a297518.jpg')",
        }}
      />
      <Chip />
      <TextContentWrapper>
        <Header>{title}</Header>
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
