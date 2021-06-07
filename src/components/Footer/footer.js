import * as React from "react"
//import PropTypes from "prop-types"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../base.css"
import "./footer.css"

const Footer = () => (
  <footer>
    <div className="conteneur">
      Bloc footer En cours de développement
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
        <div className="List 1">
          <ul>
            <div>Offres de Services</div>
            <li>Projet au forfait </li>
            <li>Assistance Technique</li>
            <li>Maintenance Applicative</li>
            <li>UX/UIX</li>
          </ul>
        </div>
        <div className="List 2">
          <ul>
            <div>Les pôles d'Ennovsys</div>
            <li>Pôle PcSoft</li>
            <li>Pôle digital</li>
            <li>Technologie</li>
          </ul>
        </div>

        <div className="List 3">
          <ul>
            <div>Qui Sommes nous ?</div>
            <li>Ennovsys la société</li>
            <li>Nos Partenaires</li>
            <li>Jobs</li>
            <li>Rejoignez-nous sur : Linkedin </li>
          </ul>
        </div>
      </div>
      <div className="society">
        Tous droits réservés. 2 Bis Rue Robert Le Ricolais - 44300 NANTES
        <p> © ENNOVSYS 2014 - {new Date().getFullYear()}</p>
      </div>
    </div>
  </footer>
)

export default Footer
