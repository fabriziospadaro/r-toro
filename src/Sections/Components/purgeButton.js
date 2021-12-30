import React from "react";

export default function PurgeButton({ setPostHandler }) {

    function removeContentHandler() {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, tabs => {
            chrome.tabs.sendMessage(
                tabs[0].id,
                { from: 'popup', subject: 'purge-spam' },
                (response) => {
                    console.log(response);
                    setPostHandler(response);
                }
            );
        });
    }

    return (
        <button onClick={() => removeContentHandler()}>Purge</button>
    );
}; 