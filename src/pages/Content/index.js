import { spamPurger } from './modules/spamPurger';

console.log('Content script works!');

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if ((msg.from === 'popup') && (msg.subject === 'purge-spam')) {
        response(spamPurger());
    }
});