import _ from 'lodash';

const nest = ([x, ...xs], o = {}) =>
  xs.length === 0 ? x : (o[x] = nest(xs, o[x]), o);
const valueToStore = [];

export default class StoreClient {
  constructor() {
    this.k = "rToroSettings";
    this.settings = JSON.parse(localStorage[this.k] || "{}");
    this.afterSet = [];
  }

  get(keys) {
    return this.hashDig(this.settings, keys);
  }

  set(keys, value) {
    let rootKey = keys[0];
    //initialize dictionary if root key does not exist
    if (rootKey in this.settings === false)
      this.settings[rootKey] = {};

    if (keys.length === 1)
      this.settings[rootKey] = value;
    else {
      let dataArray = keys.slice(1); dataArray.push(value);
      Object.assign(valueToStore, dataArray);
      this.settings[rootKey] = Object.assign({}, this.settings[rootKey], nest(valueToStore));
    }
    this.settings = _.merge(JSON.parse(localStorage[this.k] || "{}"), this.settings);
    localStorage.setItem(this.k, JSON.stringify(this.settings));

    for (let i = 0; i < this.afterSet.length; i++)
      this.afterSet[i]();
  }

  hashDig(hash, keys) {
    let lastDigged = hash;
    for (let k of keys)
      if ((k in lastDigged))
        lastDigged = lastDigged[k];
      else
        return null;
    return lastDigged;
  }
}