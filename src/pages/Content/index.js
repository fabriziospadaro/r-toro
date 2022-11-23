import StoreClient from '../../libs/StoreClient';
import FeedModerationClient from './modules/feedModerationClient';
import PrivacyFilterClient from './modules/privacyFilterClient';
import DarkModeClient from './modules/darkModeClient';
import SpreadClient from './modules/spreadClient';
import requestPost from './modules/postService';
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
    response(client.get(msg.subject.key, msg.subject.type));
  } else if ((msg.from === 'session-manager-set')) {
    client.set(msg.subject.keys, msg.subject.value);
    response(true);
  }
  else if ((msg.from === 'request-copy')) {
    window.location.assign("https://www.etoro.com/people/fabriziospadaro");
  }
  else if ((msg.from === 'share-extension-post')) {
    let constantFooter = "\n Dark mode, FeedModeration, Privacy settings and Spread data are now available for free at\n https://chrome.google.com/webstore/detail/etoro-plus/dgbmblpdekbppmefegdmjiohpeapakoh";
    let bodies = [
      "Just tried out the best eToro extension, made by champion investor @FabrizioSpadaro",
      "You should definitely check this eToro extension, made by champion investor @FabrizioSpadaro",
      "Amazing extension, made by champion investor @FabrizioSpadaro",
      "The best eToro extension, made by champion investor @FabrizioSpadaro is finally live",
      "We finally have dark mode.\nMy eyes won't burn anymore thanks to this extension by champion investor @FabrizioSpadaro",
      "Finally a tool to block spammers and useless comments on eToro, thanks to this extension made by champion investor @FabrizioSpadaro"
    ]
    var text = bodies[Math.floor(Math.random() * bodies.length)] + constantFooter;

    requestPost(text);
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
