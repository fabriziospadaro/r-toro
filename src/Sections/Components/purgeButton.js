import React from "react";

export default function PurgeButton() {

    function removeContent() {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, tabs => {
            chrome.tabs.sendMessage(
                tabs[0].id,
                { from: 'popup', subject: 'purge-spam' },
                (la) => console.log(la)
            );
        });
    }

    return (
        <button onClick={() => removeContent()}>Ciao</button>
    );
}; 