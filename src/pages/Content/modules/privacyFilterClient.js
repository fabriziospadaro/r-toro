import $ from "../../Popup/jquery-3.2.1.min.js";
export default class PrivacyFilterClient {
  constructor(storeClient) {
    this.storeClient = storeClient;
    this.storeClient.afterSet.push(this.reset.bind(this));
    this.storeClient.afterSet.push(this.censor.bind(this));
  }

  censor() {
    if (this.storeClient.get(["privacySetting", "enabled"]))
      $("body").addClass("privacy--mode");
  }

  reset() {
    $("body").removeClass("privacy--mode");
  }
}

