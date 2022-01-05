import React from "react"
import "../stylesheets/toggle.scss"
export default function ToggleButton() {
  return (
    <div className="button b2" id="button-13">
      <input type="checkbox" className="checkbox" />
      <div className="knobs">
        <span></span>
      </div>
      <div className="layer"></div>
    </div>
  )
}
