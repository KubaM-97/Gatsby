import React from 'react'
import Link from 'gatsby-link'

export default function postList({posts}) {

    const postsList = posts.map( el  => {
        let post = el.node.frontmatter;
        let id = el.node.id;
        return (
            <li key={ id }> <Link to={ post.path }> { post.title } </Link> </li>
        )
    })
    return postsList
}
