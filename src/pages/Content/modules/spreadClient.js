import $ from "jquery";

export default class SpreadClient {
  constructor(storeClient) {
    this.storeClient = storeClient;
    this.storeClient.afterSet.push(this.reset.bind(this));
    this.storeClient.afterSet.push(this.visualize.bind(this));
  }

  visualize(path) {
    //should only do it after page changed
    if (this.storeClient.get(["spreadSetting", "enabled"], Boolean)) {
      if (path === "watchlists") {
        this.initWatchListView();
      } else {
        this.initialPortfolioOverview();
      }
    }
  }

  initWatchListView() {
    let mainListViewElement = $('[automation-id="watchlist-watchlist-sub-view-list"]')[0];
    let isListView = mainListViewElement?.className?.includes('list-view');
    if (isListView) {
      this.addHeaderLabel();

      let tabletRowEls = $('.et-table-row');
      for (let rowElement of tabletRowEls) {
        let tableInfoEl = $(rowElement).find('[automation-id="watchlist-item-grid-instrument-buy-sell-container"]');
        let sellBtnEl = $(tableInfoEl).find('[automation-id="buy-sell-button-container-sell"]');
        let buyBtnEl = $(tableInfoEl).find('[automation-id="buy-sell-button-container-buy"]');
        if (!sellBtnEl || !buyBtnEl)
          return;
        let sellPrice = $(sellBtnEl).find('[automation-id="buy-sell-button-rate-value"]').text().trim();
        let buyPrice = $(buyBtnEl).find('[automation-id="buy-sell-button-rate-value"]').text().trim();
        let spreadPrice = Number(buyPrice) - Number(sellPrice);
        let spreadPercent = (spreadPrice / sellPrice) * 100;
        this.addSpreadTextElement($(rowElement).find(".et-table-body-slot"), spreadPrice, spreadPercent);
      }
    } else {
      let cardElementList = $('[automation-id="watchlist-grid-instruments-list"]');
      for (let cardElement of cardElementList) {
        let btnSellEl = $(cardElement).find('[automation-id="buy-sell-button-container-sell"]');
        let btnBuyEl = $(cardElement).find('[automation-id="buy-sell-button-container-buy"]');
        if (btnBuyEl && btnSellEl) {
          let sellPrice = $(btnSellEl).find('[automation-id="buy-sell-button-rate-value"]').text().trim();
          let buyPrice = $(btnBuyEl).find('[automation-id="buy-sell-button-rate-value"]').text().trim();
          let spreadPrice = Number(buyPrice) - Number(sellPrice);
          let spreadPercent = (spreadPrice / sellPrice) * 100;
          this.addSpreadTextElement($(cardElement).find("et-instrument-trading-card"), spreadPrice, spreadPercent, " - ");
        }
      }
    }
  }

  initialPortfolioOverview() {
    let tabletRowEls = $('.ui-table-row');
    for (let el of tabletRowEls) {
      let cellNameEl = $(el).find(".table-static-cell-info");
      let sellBtnEl = $(el).find('[automation-id="buy-sell-button-container-sell"]');
      let buyBtnEl = $(el).find('[automation-id="buy-sell-button-container-buy"]');
      if (!sellBtnEl[0] || !buyBtnEl[0])
        return;

      let sellPrice = $(sellBtnEl).find('.etoro-price-value').text().trim();
      let buyPrice = $(buyBtnEl).find('.etoro-price-value').text().trim();
      let spreadPrice = Number(buyPrice) - Number(sellPrice);
      let spreadPercent = (spreadPrice / sellPrice) * 100;
      this.addSpreadTextElement(cellNameEl, spreadPrice, spreadPercent, " - ");
    }
  }

  addSpreadTextElement(parentElement, spreadPrice, spreadPercent, separator = "\n") {
    let text =
      '$' + this.toFixed(spreadPrice) + separator + spreadPercent.toFixed(3) + '%';
    let clsHelperPrice = 'etoro-helper-price';
    let priceNodeEl = parentElement.find('.' + clsHelperPrice)[0];
    if (!priceNodeEl) {
      let priceNodeEl = document.createElement('div');
      priceNodeEl.className += clsHelperPrice;
      let node = document.createTextNode(text);
      priceNodeEl.appendChild(node);
      parentElement.append(priceNodeEl);
    } else if (priceNodeEl.innerHTML !== text) {
      let needUpdateCls =
        priceNodeEl.innerHTML.trim() > text
          ? 'need-update-up'
          : 'need-update-down';
      priceNodeEl.innerHTML = text;
      priceNodeEl.classList.add(needUpdateCls);
      setTimeout(
        () => {
          priceNodeEl.classList.remove(needUpdateCls);
        },
        1000,
        priceNodeEl
      );
    }
  }

  addHeaderLabel() {
    if ($("[automation-id=\"watchlist-list-title-spread\"]").length === 0) {
      let parent = $(".et-table-head-slot");
      parent.append(`
      <span automation-id="watchlist-list-title-spread" class="spread-helper"> Spread </span>
      `);
    }
  }

  toFixed(number) {
    let result;
    if (number > 1000)
      result = Math.round(number);
    else if (number > 100)
      result = number.toFixed(1);
    else if (number > 10)
      result = number.toFixed(2);
    else
      result = Math.floor(number * 1000) === 0 ? number.toFixed(5) : number.toFixed(3);
    return result;
  }

  reset() {
    $('.etoro-helper-price').remove();
    $('.spread-helper').remove();
  }
}
