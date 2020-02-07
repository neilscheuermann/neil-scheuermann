import React from "react"
import { Wrapper, DefaultHeader } from "./styled"

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <Wrapper>
        <DefaultHeader>ABOUT</DefaultHeader>
      </Wrapper>
    </div>
  )
}

export default About
