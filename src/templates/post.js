import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default function Template({data}) {
    const { markdownRemark: { frontmatter, html } }  = data;
    return (
        <Layout>
            <div>
                <h2> { frontmatter.title } </h2>
                <div dangerouslySetInnerHTML={{ __html: html }}/>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }){
      html
      frontmatter{
        title
      }
    }
  }
`