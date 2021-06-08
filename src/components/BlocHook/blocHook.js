import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "../base.css"
import "./blockHook.css"

const BlocHook = () => (
  <div className="Container-Blockhook">
    Block hook Text
    <StaticImage
      src="../../images/bcgd_Hook.jpeg"
      width={1900}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Fond Ennovsys"
      className="imageFondHook"
    />
  </div>
)
export default BlocHook
