import React, { Fragment } from "react"
import { Link } from "gatsby"
import BlogCard from "../components/BlogCard"
import { blogCardEntries } from "../data/blogCardEntries"

const Blog = () => {
  return (
    <Fragment>
      <h1>Blog</h1>
      <div className="blog-list">
        {blogCardEntries.map(entry => (
          <Link key={entry.title} to={`/blog/${entry.urlPath}`}>
            <BlogCard
              date={entry.date}
              description={entry.description}
              title={entry.title}
            />
          </Link>
        ))}
      </div>
    </Fragment>
  )
}

export default Blog
