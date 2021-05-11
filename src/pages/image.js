import * as React from "react"
import { Link } from "gatsby"

// Image
import { StaticImage } from "gatsby-plugin-image"

// Layout contains header
import Layout from "../components/layout"

// Seo returns only Helmet - head() in Nuxt.js
import Seo from "../components/seo"

const StylingPage = () => (
  <Layout>

    <Seo title="Images" />

    <h1>Images Page</h1>

    <StaticImage src="../assets/images/gatsby-astronaut.png" width={300} quality={5}
      formats={["AUTO", "WEBP", "AVIF"]} alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />

    <p style={{backgroundColor: `orange`, padding: '10px'}}>
      <Link to="/">Back Home</Link>
    </p>

  </Layout>
)

export default StylingPage
