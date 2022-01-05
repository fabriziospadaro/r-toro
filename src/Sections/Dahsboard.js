import "./stylesheets/dashboard.scss"
import React from "react"
import FeatureSlot from "./components/FeatureSlot"
export default function Dahsboard() {
  return (
    <div className="features-list">
      <FeatureSlot featureName={"FeedMod"} featureDescription={"Feed filter"} />
      <FeatureSlot featureName={"PreMarket"} featureDescription={"Pre Market"} />
      <FeatureSlot featureName={"Darkmode"} featureDescription={"Dark Mode"} />
      <FeatureSlot featureName={"Privacy"} featureDescription={"Privacy"} />
    </div>
  )
}
