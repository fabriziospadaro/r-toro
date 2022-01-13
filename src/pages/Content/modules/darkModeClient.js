import $ from "../../Popup/jquery-3.2.1.min.js";
export default class DarkModeClient {
  constructor(storeClient) {
    this.storeClient = storeClient;
    this.storeClient.afterSet.push(this.reset.bind(this));
    this.storeClient.afterSet.push(this.darken.bind(this));
  }

  darken() {
    if (this.storeClient.get(["darkModeSetting", "enabled"]))
      $("body").addClass("dark--mode");
  }

  reset() {
    $("body").removeClass("dark--mode");
  }
}

