import React, { Fragment } from "react"
import BlogCard from "../components/BlogCard"

const Blog = () => (
  <Fragment>
    <h1>Blog</h1>
    <div className="blog-list">
      <BlogCard />
    </div>
  </Fragment>
)

export default Blog
