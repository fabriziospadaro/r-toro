export const DEF_BLACKLIST = [
    "die ich auf @eToro bereitgestellt habe",
    "up or down",
    "my porfolio is up",
    "my porfolio is down",
    "i closed this trade",
    "btc",
    "dodge"
]

export function validContent(content, storeClient) {
    let enabled = storeClient.get(["feedSettings", "blackListSettings", "enabled"]);
    let blackList = storeClient.get(["feedSettings", "blackListSettings", "list"])?.split("*");
    if (!enabled || !blackList || blackList[0] === "")
        return true;
    for (let w of blackList) {
        if (content.includes(w))
            return false;
    }
    return true;
}