import "./stylesheets/dashboard.scss"
import React from "react"
import FeatureSlot from "./components/FeatureSlot"
import FeedModeration from "./feedModeration"
export default function Dahsboard() {
  return (
    <div className="features-list">
      <FeatureSlot featureName={"FeedMod"} featureDescription={"Feed Moderation"} settingCmp={<FeedModeration />} settingKeys={["feedSettings", "enabled"]} />
      <FeatureSlot featureName={"PreMarket"} featureDescription={"Pre Market"} settingCmp={<FeedModeration />} settingKeys={["preMarketSetting", "enabled"]} />
      <FeatureSlot featureName={"Darkmode"} featureDescription={"Dark Mode"} settingCmp={<FeedModeration />} settingKeys={["darkModeSetting", "enabled"]} />
      <FeatureSlot featureName={"Privacy"} featureDescription={"Privacy"} settingCmp={<FeedModeration />} settingKeys={["privacySetting", "enabled"]} />
    </div>
  )
}
