import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

const BlogPage = ({data}) => (
    // console.log(data)
    <div>
        <h1>Latest posts:</h1>
        {/* {pageQuery.allMarkdownRemark.edges.map(post=>{
            <div key={post.node.id}>
                <h3> {post.node.frontmatter.title}</h3>
                <small> Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date} </small>
                <br /><br />
                <Link to={post.node.frontmatter.path}>Read More</Link>
            </div>
        })} */}

        <Link to="/"> Back Home </Link>
    </div>
)


export default BlogPage