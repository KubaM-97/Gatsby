import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import PostsList from '../components/postsList'

const PostPage = () => {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            path
                            title
                        }
                        id
                    }
                }
            }
        }`
    )
    return (
        <Layout>
            <ul>
                <PostsList posts={allMarkdownRemark.edges}/>
            </ul>
        </Layout>
    )
}
export default PostPage