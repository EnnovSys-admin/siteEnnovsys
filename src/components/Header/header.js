import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLinkedin,faFacebookF,faTwitter} from "@fortawesome/free-brands-svg-icons"
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import "../base.css"
import "./header.css"

const Header = ({ siteTitle }) => (
  <div className="screenFirst">
    <div className="container ">

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
            <li >
              <div className="icon_header"><FontAwesomeIcon icon={faFacebookF}/></div>
            </li>
            <li >
              <div className="icon_header"><FontAwesomeIcon icon={faTwitter}/></div>
            </li>
            <li >
              <div className="icon_header"><FontAwesomeIcon icon={faLinkedin}/></div>
            </li>
            <li  ><div className="icon_lang">FR</div></li>
            <li >
            <div className="icon_Bars"><FaBars size={35} /></div>
          
            </li>
            
          </ul>
          </div>
          </header> 
          </div>
          <div className="block-BckgText">
            <div className="groupText-font">
              <div className="groupText-Bold">
                <div>AGENCE DIGITAL</div>
                <div>NANTAISE</div>
              </div>
              <div className="groupText-Normal">
                <div>DEVELOPPEMENT APPLICATIONS</div>
                <div>NOUVELLE GENERATIONS</div>
              </div>
            </div> 
            <div className="line"></div>
            <div className="btn-Contact">Contactez-nous</div>
          </div>
        
     </div>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
