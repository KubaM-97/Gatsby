import * as React from "react"
import PropTypes from "prop-types"

// Link in Gatsby.js is like NuxtLink in Nuxt.js (to="/", pages folder) 
import { Link } from "gatsby"

// siteTitle is a simply prop passed from layout.js (like in Vue)
const Header = ({ siteTitle }) => (

  <header style={{ background: `green`, marginBottom: `10px` }}>

    <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem` }}>
        <h1 style={{ margin: 0 }}>
          <Link to="/" style={{ color: `orange`, padding: '10px' }}>
            {siteTitle}
          </Link>
        </h1>
    </div>

  </header>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
