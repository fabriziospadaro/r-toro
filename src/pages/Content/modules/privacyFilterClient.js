export default class PrivacyFilterClient {
  constructor(storeClient) {
    this.storeClient = storeClient;
    this.storeClient.afterSet.push(this.reset.bind(this));
    this.storeClient.afterSet.push(this.censor.bind(this));
  }

  censor() {
    if (this.storeClient.get(["privacySetting", "enabled"], Boolean))
      document.querySelector("body").classList.add("privacy--mode");
  }

  reset() {
    document.querySelector("body").classList.remove("privacy--mode");
  }
}

