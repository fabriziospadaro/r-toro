import "./stylesheets/dashboard.scss"
import React from "react"
import FeatureSlot from "./components/FeatureSlot"
import FeedModeration from "./feedModeration"
import SupportFooter from "./Components/SupportFooter"
export default function Dahsboard() {
  return (
    <div>
      <div className="features-list">
        <FeatureSlot featureName={"Darkmode"} featureDescription={"Dark Mode"} settingKeys={["darkModeSetting", "enabled"]} />
        <FeatureSlot featureName={"FeedMod"} featureDescription={"Feed Moderation"} settingCmp={<FeedModeration />} settingKeys={["feedSettings", "enabled"]} />
        <FeatureSlot featureName={"Privacy"} featureDescription={"Privacy"} settingKeys={["privacySetting", "enabled"]} />
        <FeatureSlot featureName={"Spread"} featureDescription={"Spread"} settingKeys={["spreadSetting", "enabled"]} />
      </div>
      <SupportFooter />
    </div >
  )
}
