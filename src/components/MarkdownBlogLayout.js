import React from "react"

const MarkdownBlogLayout = props => {
  return (
    <div style={{ backgroundColor: "gray", width: "100vw", height: "100vh" }}>
      {props.children}
    </div>
  )
}

export default MarkdownBlogLayout
