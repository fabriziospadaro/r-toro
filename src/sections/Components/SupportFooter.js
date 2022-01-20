import React from "react"
import "../stylesheets/supportFooter.scss"

export default function SupportFooter() {
  function requestCopyHandle() {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { from: 'request-copy', subject: {} },
        (response) => {
          resolve(response);
        }
      );
    });
  }
  return (
    <div className="footer">
      <p>Support this project</p>
      <div className="call-to-actions">
        <div onClick={() => { requestCopyHandle() }} className="copy"><i class="fas fa-star"></i>Copy<span>+120% L2Y</span></div>
        <div onClick={() => { window.open("https://www.paypal.com/paypalme/sowrdfab/4", "_blank") }} className="donate"><i class="fas fa-donate"></i>Donate</div>
      </div >
      <a href="https://www.linkedin.com/in/fabrizio-spadaro/" target={"_blank"}>© Fabrizio Spadaro 2022</a>
    </div >
  )
}
