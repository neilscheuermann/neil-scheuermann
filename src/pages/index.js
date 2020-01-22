import React, { Fragment } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { MONOSPACE_FONT } from "../data/constants"

const FinalLine = styled.div`
  display: flexbox;
`
const Home = styled.div`
  height: calc(100vh + 48px);
  background-color: black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const HomeBody = styled.div``

const HomeText = styled.p`
  font-family: ${MONOSPACE_FONT};
  color: #2fc45a;
  line-height: 1.8em;
  font-size: 1em;
  text-transform: uppercase;
`

const HomeCursor = styled.div`
  width: 10px;
  height: 1.2em;
  background: #2fc45a;
  transform: translate(0, 4px);
  margin-left: 1px;
  opacity: 0.8;
`

const About = styled.div`
  height: calc(100vh + 48px);
`

const Portfolio = styled.div`
  height: calc(100vh + 48px);
  background-color: #f5f5f5;
`

const Blog = styled.div`
  height: calc(100vh + 48px);
`
const Contact = styled.div`
  height: calc(100vh + 48px);
  background-color: #616161;
`

const IndexPage = () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <title>Neil Scheuermann</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Helmet>

    {/* == BODY == */}
    {/* -- NAV -- */}
    <div>
      <Link to="/about/">About</Link>
      <Link to="/blog/">Blog</Link>
      <div className="content"></div>
    </div>
    {/* -- HOME -- */}
    <Home>
      <HomeBody>
        <HomeText>I'm Neil Scheuermann and I'm</HomeText>
        <HomeText>a full stack software engineer!</HomeText>
        <FinalLine>
          <HomeText>Click here to view my work</HomeText>
          <HomeCursor />
        </FinalLine>
      </HomeBody>
    </Home>
    {/* -- ABOUT -- */}
    <About>
      <h1>About</h1>
    </About>
    {/* -- PORTFOLIO -- */}
    <Portfolio>
      <h1>Portfolio</h1>
    </Portfolio>
    {/* -- BLOG -- */}
    <Blog>
      <h1>Blog</h1>
    </Blog>
    {/* -- CONTACT -- */}
    <Contact>
      <h1>Contact</h1>
    </Contact>
  </Fragment>
)

export default IndexPage
