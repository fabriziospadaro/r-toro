import castValue from "./utils";

export default class StoreManager {
  static set(keys, value) {
    if (typeof keys === 'string' || keys instanceof String)
      keys = [keys];
    return new Promise((resolve, reject) => {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { from: 'session-manager-set', subject: { keys: keys, value: value } },
          (response) => {
            resolve(response);
          }
        );
      });
    })
  }

  static get(k, type = null) {
    if (typeof k === 'string' || k instanceof String)
      k = [k];

    return new Promise((resolve, reject) => {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { from: 'session-manager-get', subject: { key: k, type: type } },
          (response) => {
            resolve(castValue(response, type));
          }
        );
      });
    })
  }
}