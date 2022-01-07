//https://stackoverflow.com/questions/20019958/chrome-extension-how-to-send-data-from-content-script-to-popup-html
//https://developer.chrome.com/docs/extensions/reference/storage/
//https://developer.chrome.com/docs/extensions/reference/runtime/#method-sendMessage
//https://developer.chrome.com/docs/extensions/mv3/messaging/#simple
/*
const STORAGE = {};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  let parsedData = parseData(message);

  if (parsedData.k === "session-manager-get") {
    sendResponse(STORAGE[parsedData.v]);
  } else if (parsedData.k === "session-manager-set") {
    chrome.storage.sync.set(parsedData.v, function () {
      /*
      let test = STORAGE;
      test.push({
        key: "keyName",
        value: "the value"
      });
      Object.assign(STORAGE, data.options);
      //let result = parseData(parsedData.v);
      
    });
    chrome.storage.local.set(parsedData.v, function () {
      console.log('Value is set to ' + parsedData.v);
    });
    sendResponse(true);
  }
});

function parseData(data) {
  return {
    k: Object.keys(data)[0],
    v: Object.values(data)[0]
  }
}

const storageCache = {};
const initStorageCache = getAllStorageSyncData().then(items => {
  Object.assign(storageCache, items);
});

chrome.action.onClicked.addListener(async (tab) => {
  try {
    await initStorageCache;
  } catch (e) {
  }
});


function getAllStorageSyncData() {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(null, (items) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve(items);
    });
  });
}

*/