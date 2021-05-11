import React from 'react'
import Link from 'gatsby-link'

export default function postList({posts}) {

    const postsList = posts.map( el  => {
        let post = el.node.frontmatter;
        return (
            <li> <Link to={ post.path }> { post.title } </Link> </li>
        )
    })
    return postsList
}
