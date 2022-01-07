import React, { useState, useEffect } from "react"
import StoreManager from "../../libs/StoreManager";
import "../stylesheets/toggle.scss"
export default function ToggleButton({ settingKeys }) {
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    loadToggleState();
  }, [])

  function toggleFeatureHandler(e) {
    StoreManager.set(settingKeys, !e.target.checked);
  }

  function loadToggleState() {
    return StoreManager.get(settingKeys).then(v => {
      if (v === undefined || v === null)
        v = true;
      document.getElementById(settingKeys.join("_")).checked = !v;
      setChecked(!v);
    });
  }

  return (
    <div className="button b2" id="button-13">
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
