import React from "react"
import "../stylesheets/navbar.scss"
import NavigationManager from "../../libs/NavigationManager"
import FeedModeration from "../feedModeration";
export default function Navbar({ showBackBtn }) {
  function navigateTo(dst) {
    document.getElementById("navHandle").checked = false;
    NavigationManager.nagivateTo(dst);
  }
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input id="navHandle" type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a onClick={() => navigateTo(<FeedModeration />)}><li>Feed Moderation</li></a>
          <a href="#"><li>Premarket</li></a>
          <a href="#"><li>Privacy</li></a>
          <a href="https://www.etoro.com/people/fabriziospadaro" target="_blank"><li>Copy me</li></a>
        </ul>
      </div>
    </nav>
  )
}
