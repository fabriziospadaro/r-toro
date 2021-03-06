export const DEF_TAG_LIMIT = 5;

export function validTags(content, storeClient) {
    let enabled = storeClient.get(["feedSettings", "tagSettings", "enabled"]);
    let maxLimit = storeClient.get(["feedSettings", "tagSettings", "max"]);
    if (!enabled)
        return true;
    const regex = /\B\$\w+/g;
    let tags = content.match(regex)?.length;
    return (tags === null || tags === undefined) || tags < maxLimit;
}