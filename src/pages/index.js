import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

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
    <div>
      <Link to="/about/">About</Link>
      <Link to="/blog/">Blog</Link>
      <div className="content">
        <div>Hi, I'm Neil Scheuermann.</div>
        <div>I'm a full stack software engineer!</div>
        <div>My work -></div>
      </div>
    </div>
  </Fragment>
)

export default IndexPage
