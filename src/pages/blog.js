import React, { Fragment } from "react"
import Typography from "@material-ui/core/Typography"
import BlogCard from "../components/BlogCard"
import BlogCardVanilla from "../components/BlogCardVanilla"
import { blogCardEntries } from "../data/blogCardEntries"

const Blog = () => {
  return (
    <Fragment>
      <Typography gutterBottom variant="h2" component="h1">
        Blog
      </Typography>

      <div className="blog-list">
        {blogCardEntries.map(entry => (
          <>
            <BlogCard
              date={entry.date}
              description={entry.description}
              title={entry.title}
              urlPath={entry.urlPath}
            />
            <BlogCardVanilla
              date={entry.date}
              description={entry.description}
              title={entry.title}
              urlPath={entry.urlPath}
            />
          </>
        ))}
      </div>
    </Fragment>
  )
}

export default Blog
