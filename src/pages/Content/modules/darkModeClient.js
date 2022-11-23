export default class DarkModeClient {
  constructor(storeClient) {
    this.storeClient = storeClient;
    this.storeClient.afterSet.push(this.reset.bind(this));
    this.storeClient.afterSet.push(this.darken.bind(this));
  }

  darken() {
    if (this.storeClient.get(["darkModeSetting", "enabled"], Boolean))
      document.querySelector("body").classList.add("dark--mode");
  }

  reset() {
    document.querySelector("body").classList.remove("dark--mode");
  }
}

