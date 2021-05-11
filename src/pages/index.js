import * as React from "react"
import { Link } from "gatsby"

// Layout contains header
import Layout from "../components/layout"

// Seo returns only Helmet - head() in Nuxt.js
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>

    <Seo title="Home" />

    <h1>Hello World - static sentence</h1>

    <h2>This is routing in 'pages' folder: </h2>
    <p style={{backgroundColor: `orange`, padding: '10px'}}>
      <Link to="/posts/">Go to Posts</Link> <br />
      <Link to="/using-typescript/">Go to TypeScript</Link> <br />
      <Link to="/styling/">Styling page</Link> <br />
      <Link to="/image/">Image page</Link> <br />
      <Link to="/props/">Props page</Link> <br />
    </p>

  </Layout>
)

export default IndexPage
