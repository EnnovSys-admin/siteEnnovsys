import * as React from "react"
//import PropTypes from "prop-types"
//import { Link } from "gatsby"
import "../base.css"
import "./footer.css"

const Footer = () => (
  <footer>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        fontSize: "1rem",
      }}
    >
      Tous droits réservés. 2 Bis Rue Robert Le Ricolais - 44300 NANTES
      <p>© ENNOVSYS 2014 - {new Date().getFullYear()}</p>
    </div>
  </footer>
)

export default Footer
