import React from "react";
import ToggleButton from "./ToggleButton";
import "../stylesheets/accordion.scss"
export default function FeedSetting({ title, content, settingKeys }) {
  return (
    <li style={{ "zIndex": 0 }}>
      <div className="toggle">
        <ToggleButton settingKeys={settingKeys} />
      </div>
      <input className="expand" type="checkbox" defaultChecked={true} />
      <i></i>
      <h2>{title}</h2>
      <div className="content">{content}</div>
    </li>
  )
}
