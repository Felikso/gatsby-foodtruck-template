import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./Header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      
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
