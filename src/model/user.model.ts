/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

type User = {
    uid: number
    username: string
    password: string
    playerName: string
    preferredLanguage: Language
    privileges: Array<UserPrivilege>
}

enum UserPrivilege {
    READ,
    CREATE,
    EDIT,
    LIKE,
    DELETE,
    RECRUITER,
    TIME,
    LABELS,
    CATEGORIES,
}

enum Language {
    EN,
    DN,
    HU,
}