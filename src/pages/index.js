import React, { Fragment } from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <Fragment>
    <h1>
      Hello, my name is Neil Scheuermann and I'm a full stack software engineer!
    </h1>
    <Link to="/about/">About</Link>
    <Link to="/blog/">Blog</Link>
  </Fragment>
)

export default IndexPage
