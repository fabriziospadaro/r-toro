import React, { useEffect } from "react";
import "../stylesheets/tagLimit.scss"
import { useState } from "react";
import StoreManager from "../../libs/StoreManager";
export default function TagLimit() {
  const [maxTags, setmaxTags] = useState(4);

  useEffect(() => {
    StoreManager.get(["feedSettings", "tagSettings", "max"]).then((tags) => {
      let tagCount = parseInt(tags);
      tagCount = isNaN(tagCount) ? 5 : tagCount;
      setmaxTags(tagCount);
    });
  }, [])
  function increaseMaxTags() {
    StoreManager.set(["feedSettings", "tagSettings", "max"], maxTags + 1);
    setmaxTags(maxTags + 1);
  }
  function decreaseMaxTags() {
    if (maxTags > 1) {
      StoreManager.set(["feedSettings", "tagSettings", "max"], maxTags - 1);
      setmaxTags(maxTags - 1);
    }
  }
  return (
    <div>
      <p>Hide posts with more than {maxTags} tags</p>
      <div className="tag-limit-container">
        <b onClick={() => decreaseMaxTags()}>-</b>
        <p>{maxTags}</p>
        <b onClick={() => increaseMaxTags()}>+</b>
      </div>
    </div>
  )
}
