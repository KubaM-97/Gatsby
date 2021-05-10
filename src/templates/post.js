import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default function Template({data}) {
    const { allMarkdownRemark: post } = data;
    // or const post = data.markdownRemark;

    console.log(post.nodes[0].frontmatter.title)
    
    return (
        <Layout>
            <div>
                <h1> {post.nodes.frontmatter.title} </h1>
                <div dangerouslySetInnerHTML={{ __html: post.nodes.html }}/>
                {/* <h2>title</h2>
                <h3>stack</h3>
                <div>
                    <Img fluid={}/>
                </div>
                <div dangerouslySetInnerHTML={}/> */}
            </div>
        </Layout>
    )
}
export const query = graphql`
    query slug {
        allMarkdownRemark {
            nodes{
                frontmatter{
                    title
                    date
                    author
                }
            id
            }
        }
    }
`