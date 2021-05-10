import * as React from "react"

const Footer = ({siteAuthor}) => (

    <footer style={{ marginTop: `2rem` }}>

        Documentation: <a href="https://www.gatsbyjs.com">Gatsby</a>
        © {new Date().getFullYear()}, Built with {siteAuthor} <br /><br />

    </footer>

)

export default Footer
