import * as React from "react"
//import PropTypes from "prop-types"
/*import { Link } from "gatsby"*/
import { StaticImage } from "gatsby-plugin-image"
import "../base.css"
import "./footer.css"

const Footer = () => (
  <footer>
    <div className="conteneur">
      <div className="footerLine"></div>
      <div className="footer_align">
        <div className="logo">
          <StaticImage
            src="../../images/logo-icon.png"
            width={110}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Logo Icone Ennovsys"
            className="logo-icone"
          />
        </div>

        <ul className="listFooter">
          <li className="listFooter_tiltle">Offres de Services</li>
          <li>Projet au forfait </li>
          <li>Assistance Technique</li>
          <li>Maintenance Applicative</li>
          <li>UX/UIX</li>
        </ul>

        <ul className="listFooter">
          <li className="listFooter_tiltle">Les pôles d'Ennovsys</li>
          <li>Pôle PcSoft</li>
          <li>Pôle digital</li>
          <li>Technologie</li>
        </ul>

        <ul className="listFooter">
          <li className="listFooter_tiltle">Qui Sommes nous ?</li>
          <li>Ennovsys la société</li>
          <li>Nos Partenaires</li>
          <li>Jobs</li>
          <li>Rejoignez-nous sur : Linkedin </li>
        </ul>
      </div>
      <div className="society">
        Tous droits réservés. 2 Bis Rue Robert Le Ricolais - 44300 NANTES ©
        ENNOVSYS 2014 - {new Date().getFullYear()}{" "}
      </div>
      <div className="footerLine"></div>
    </div>
  </footer>
)

export default Footer
