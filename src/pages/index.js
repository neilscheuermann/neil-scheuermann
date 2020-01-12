import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Home = styled.section`
  background-color: burlywood;
  padding: 0 10px;
  height: calc(100vh + 24px);
`

const IndexPage = () => (
  <FlexWrapper>
    <Link to="/about/">About</Link>
    <Link to="/blog/">Blog</Link>
    {/* Home  */}
    <Home>
      <div className="content">
        <div>Hi, I'm Neil Scheuermann.</div>
        <div>I'm a full stack software engineer!</div>
        <div>My work -></div>
      </div>
    </Home>
  </FlexWrapper>
)

export default IndexPage
