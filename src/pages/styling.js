import * as React from "react"
import { Link } from "gatsby"

// Layout contains header
import Layout from "../components/layout"

// Seo returns only Helmet - head() in Nuxt.js
import Seo from "../components/seo"

// Modules are triggered by className={variableName.class}
import * as modules from '../assets/css/modules/my-own-module.module.css'

// sass
import '../assets/scss/index.scss'

// styled-components
import styled from 'styled-components'

const Paragraph = styled.p`
  color: blue;
  line-height: 4rem;
`

const GatsbyLink = styled(Link)`
  background-color: orange;
  padding: 10px;
`

// instead of class use className={''} or style={{}}
const StylingPage = () => (
  <Layout>

    <Seo title="Styling" />

    <h1>Styling Css Page</h1>

    <p className={'scss'}>This text is styled by SaSS (14px)</p>

    <p className={modules.firstP}> This text is styled by a module (27px) </p>
    
    <p id="globalParagraph"> This text is styled by global settings <br /> gatsby-browser.js (43px) </p>
    
    <Paragraph> This text is styled-components (68px)</Paragraph>

    <GatsbyLink to="/">Back Home</GatsbyLink>

  </Layout>
)

export default StylingPage
