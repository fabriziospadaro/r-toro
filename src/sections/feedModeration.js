import React, { useState } from "react";
import FeedSetting from "./Components/FeedSetting";
import GenericBlacklist from "./Components/GenericBlacklist";
import TagLimit from "./Components/TagLimit";
import "./stylesheets/accordion.scss";
export default function FeedModeration() {
  return (
    <div className="accordion">
      <ul>
        <FeedSetting
          title={"Word Black list"}
          content={
            <GenericBlacklist
              listKeyPath={["feedSettings", "blackListSettings", "list"]}
              description={"Hide posts containing any of those words"}
            />}
          settingKeys={["feedSettings", "blackListSettings", "enabled"]}
        />
        <FeedSetting
          title={"User Black list"}
          content={
            <GenericBlacklist
              listKeyPath={["feedSettings", "userBlackListSettings", "list"]}
              description={"Hide posts wrote from specific users"}
            />}
          settingKeys={["feedSettings", "userBlackListSettings", "enabled"]}
        />
        <FeedSetting
          title={"Tag limit"}
          content={<TagLimit />}
          settingKeys={["feedSettings", "tagSettings", "enabled"]}
        />
      </ul>
    </div>
  );
};  