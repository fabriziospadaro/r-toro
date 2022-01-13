import StoreClient from '../../libs/StoreClient';
import FeedModerationClient from './modules/feedModerationClient';
import PrivacyFilterClient from './modules/privacyFilterClient';
import DarkModeClient from './modules/darkModeClient';
import SpreadClient from './modules/spreadClient';
const client = new StoreClient();
const feedModeration = new FeedModerationClient(client);
const privacyFilter = new PrivacyFilterClient(client);
const darkMode = new DarkModeClient(client);
const spread = new SpreadClient(client);
//copia https://github.com/vanduc1102/etoro-helper
setInterval(function () {
    update();
}, 100);

setInterval(function () {
    privacyFilter.censor();
    darkMode.darken();
}, 10);

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if ((msg.from === 'session-manager-get')) {
        response(client.get(msg.subject));
    } else if ((msg.from === 'session-manager-set')) {
        client.set(msg.subject.keys, msg.subject.value);
        response(true);
    }
});


function update() {
    let path = currentPath();
    if (path === "home" || path.includes("market"))
        feedModeration.moderateFeedRoutine();
    else if (path === "watchlists" || path.includes("portfolio")) {
        spread.visualize(path);
    }
}


function currentPath() {
    return window.location.pathname.replace("/", "");
}
