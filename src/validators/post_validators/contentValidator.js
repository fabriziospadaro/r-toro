export const DEF_BLACKLIST = [
    "die ich auf @eToro bereitgestellt habe",
    "up or down",
    "my porfolio is up",
    "my porfolio is down",
    "i closed this trade",
]

export function validContent(content) {
    for (let w of DEF_BLACKLIST) {
        if (content.includes(w)) {
            return false;
        }
    }
    return true;
}