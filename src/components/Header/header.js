import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../base.css"
import "./header.css"
const Header = ({ siteTitle }) => (
  <header className="Header">
    <Link to="/">
      <StaticImage
        src="../../images/logo-icon.png"
        width={40}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Logo Icone Ennovsys"
        className="logo-icone"
      />
      <StaticImage
        src="../../images/Logo_Texte_EnnovSys.png"
        width={120}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Logo Ennovsys"
        className="logo"
      />
    </Link>

    <div className="Menu">
      <ul>
        <li>Projet au Forfait</li>
        <li>Assistance Technique</li>
        <li>Maintenance Applicative</li>
        <li>UX/UIX</li>
        <li>Contact</li>
      </ul>
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
