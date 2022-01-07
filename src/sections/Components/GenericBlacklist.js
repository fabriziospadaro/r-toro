import React, { useEffect, useState } from "react";
import StoreManager from "../../libs/StoreManager";
export default function GenericBlacklist({ listKeyPath, description }) {
  const [list, setList] = useState("");

  useEffect(() => {
    loadWords();
  }, []);

  function loadWords() {
    StoreManager.get(listKeyPath).then(response => {
      setList(response);
      initSelectize();
    });
  }

  function storeWords(list) {
    StoreManager.set(listKeyPath, list);
  }

  function initSelectize() {
    $("#" + listKeyPath.join("_")).selectize({
      delimiter: "*",
      persist: false,
      create: function (input) {
        return {
          value: input,
          text: input,
        };
      },
      onChange: function (value, isOnInitialize) {
        storeWords(value);
      }
    });
  }

  return (
    <div>
      <p>{description}</p>
      <p className="tutorial">Separate using '*'</p>
      <form>
        <input type="text" id={listKeyPath.join("_")} defaultValue={list} />
      </form>
      <br />
    </div>
  )
}
