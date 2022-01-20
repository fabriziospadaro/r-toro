import React from "react"
import NavigationManager from "../../libs/NavigationManager"
import ToggleButton from "./ToggleButton"
export default function FeatureSlot({ featureName, featureDescription, settingCmp, settingKeys }) {
  return (
    <div className="feature-slot">
      <p onClick={() => settingCmp && NavigationManager.nagivateTo(settingCmp)}>{featureDescription}</p>
      <ToggleButton settingKeys={settingKeys} />
    </div>
  )
}
