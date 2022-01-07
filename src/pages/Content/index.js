import StoreClient from '../../libs/StoreClient';
import FeedModerationClient from './modules/feedModerationClient';
const client = new StoreClient();
const feedModeration = new FeedModerationClient(client);
console.log('Content script works!');

const updateInterval = setInterval(function () {
    update();
}, 500);
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
}


function currentPath() {
    return window.location.pathname.replace("/", "");
}