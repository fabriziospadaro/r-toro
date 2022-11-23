import React, { useEffect } from "react";
import "../stylesheets/tagLimit.scss"
import { useState } from "react";
import StoreManager from "../../libs/StoreManager";
import { DEF_TAG_LIMIT } from "../../validators/post_validators/tagLimitValidator";

export default function TagLimit() {
  const [maxTags, setmaxTags] = useState(DEF_TAG_LIMIT);

  useEffect(() => {
    StoreManager.get(["feedSettings", "tagSettings", "max"], Number).then((tags) => {
      let tagCount = !tags ? DEF_TAG_LIMIT : tags;
      setmaxTags(parseInt(tagCount));
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
