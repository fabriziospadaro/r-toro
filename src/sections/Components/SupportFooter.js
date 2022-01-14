import React from "react"
import "../stylesheets/supportFooter.scss"

export default function SupportFooter() {
  return (
    <div className="footer">
      <p>Support this project</p>
      <div className="call-to-actions">
        <div className="copy"><i class="fas fa-star"></i>Copy<span>+120% L2Y</span></div>
        <div className="donate"><i class="fas fa-donate"></i>Donate</div>
      </div >
      <a href="https://www.linkedin.com/in/fabrizio-spadaro/" target={"_blank"}>© Fabrizio Spadaro 2022</a>
    </div >
  )
}
