export default class StoreManager {
  static set(keys, value) {
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
  static get(k) {
    if (k instanceof String)
      k = [k];
    return new Promise((resolve, reject) => {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { from: 'session-manager-get', subject: k },
          (response) => {
            resolve(response);
          }
        );
      });
    })
  }
}