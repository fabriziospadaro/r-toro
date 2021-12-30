import React, { useState } from "react";
import PurgeButton from "./Components/purgeButton";

export default function FeedFilter() {
    const [postRemoved, setPostRemoved] = useState(0);

    function setPostHandler(removed) {
        setPostRemoved(removed);
    }
    return (
        <>
            <div>
                <h1>Feed Filter</h1>
                <PurgeButton setPostHandler={setPostHandler} />
                {postRemoved !== 0 && <p>{postRemoved}</p>}
            </div>
        </>
    );
};  