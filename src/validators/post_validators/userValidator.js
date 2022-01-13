export const DEF_USER_BLACKLIST = [
    "mirkandogan",
    "nitu008",
    "remo2021"
]

export function validUser(user, storeClient) {
    let enabled = storeClient.get(["feedSettings", "userBlackListSettings", "enabled"]);
    let blackList = storeClient.get(["feedSettings", "userBlackListSettings", "list"])?.split("*");
    if (!enabled || !blackList || blackList[0] === "")
        return true;
    for (let w of blackList) {
        if (user.includes(w)) {
            return false;
        }
    }
    return true;
}