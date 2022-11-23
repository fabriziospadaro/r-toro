import React, { useState, useEffect, useContext } from "react"
import StoreManager from "../../libs/StoreManager";
import "../stylesheets/toggle.scss";
import { AppContex } from "../Home";
import { enabledModules } from "../../config/config";

export default function ToggleButton({ settingKeys }) {
  const [isChecked, setChecked] = useState(false);
  const { setShow } = useContext(AppContex);

  useEffect(() => {
    loadToggleState();
  }, [])

  function toggleFeatureHandler(e) {
    setShow(true);
    StoreManager.set(settingKeys, !e.target.checked);
  }

  function loadToggleState() {
    return StoreManager.get(settingKeys, Boolean).then(v => {
      document.getElementById(settingKeys.join("_")).checked = !v;
      setChecked(!v);
    });
  }

  return (
    <div className="toggle-btn b2" id="toggle-btn-13">
      <input
        type="checkbox"
        id={settingKeys.join("_")}
        className="checkbox"
        onChange={(e) => toggleFeatureHandler(e)}
        defaultChecked={isChecked}
      />
      <div className="knobs">
        <span></span>
      </div>
      <div className="layer"></div>
    </div>
  )
}
