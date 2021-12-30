export const DEF_USER_BLACKLIST = [
    "mirkandogan",
    "nitu008"
]

export function validUser(user) {
    for (let w of DEF_USER_BLACKLIST) {
        if (user.includes(w)) {
            return false;
        }
    }
    return true;
}