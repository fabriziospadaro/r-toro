import React from "react"
import ToggleButton from "./toggleButton"
export default function FeatureSlot({ featureName, featureDescription }) {
  return (
    <div className="feature-slot">
      <p>{featureDescription}</p>
      <ToggleButton />
    </div>
  )
}
