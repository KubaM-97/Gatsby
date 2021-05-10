// THIS IS A STATIC LAYOUT COMPONENT (CENTER COMPONENT BETWEEN HEADER COMPONENT AND FOOTER COMPONENT)

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../assets/css/layout.css"

// children in Gatsby.js is like slot in Vue.js
const Layout = ({ children }) => {

  // this shit below is from gatsby-config.js file
  // useStaticQuery is a component that allows to query for data
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  
  return (
    // empty tag (no component) instead of <div></div> 
    // - there must be one root element, like in template in Vue
    <>
      <Header siteTitle={data.site.siteMetadata.title || `Title`} />

      <div style={{ margin: `0 auto`, maxWidth: 960, padding: `0 1.0875rem 1.45rem` }}>
        <main>{children}</main>
        <Footer siteAuthor={data.site.siteMetadata.author || `Author`} />
      </div>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
