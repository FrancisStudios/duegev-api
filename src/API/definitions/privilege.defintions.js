/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

/**
 * Private function to this module, helps
 * determine if user is one of sudoers
 * @returns {boolean}
 * @param {Array<string>} privileges 
 * */
const isSudo = (privileges) => {
    return privileges.includes(PrivilegeEnum.SUDO);
}


const Privileges = {
    /**
     * Returns if user is editor, or has privilege
     * @returns {boolean}
     * @param {Array<string>} privileges 
     */
    canEdit(privileges) {
        return isSudo(privileges) || privileges.includes(PrivilegeEnum.EDIT);
    },

    /**
     * Returns if user can read
     * @returns {boolean}
     * @param {Array<string>} privileges 
     */
    canRead(privileges) {
        return isSudo(privileges) || privileges.includes(PrivilegeEnum.READ);
    },

    /**
     * Returns if user can create
     * @returns {boolean}
     * @param {Array<string>} privileges 
     */
    canCreate(privileges) {
        return isSudo(privileges) || privileges.includes(PrivilegeEnum.CREATE);
    },

    /**
     * Returns if user can like
     * @returns {boolean}
     * @param {Array<string>} privileges 
     */
    canLike(privileges) {
        return isSudo(privileges) || privileges.includes(PrivilegeEnum.LIKE);
    },

    /**
     * Returns if user can delete
     * @returns {boolean}
     * @param {Array<string>} privileges 
     */
    canDelete(privileges) {
        return isSudo(privileges) || privileges.includes(PrivilegeEnum.DELETE);
    },

    /**
     * Returns if user is a recruiter
     * @returns {boolean}
     * @param {Array<string>} privileges 
     */
    isRecruiter(privileges) {
        return isSudo(privileges) || privileges.includes(PrivilegeEnum.RECRUITER);
    },

    /**
     * Returns if user has time tracking privilege
     * @returns {boolean}
     * @param {Array<string>} privileges 
     */
    hasTime(privileges) {
        return isSudo(privileges) || privileges.includes(PrivilegeEnum.TIME);
    },

    /**
     * Returns if user has label management privilege
     * @returns {boolean}
     * @param {Array<string>} privileges 
     */
    hasLabels(privileges) {
        return isSudo(privileges) || privileges.includes(PrivilegeEnum.LABELS);
    },

    /**
     * Returns if user has category management privilege
     * @returns {boolean}
     * @param {Array<string>} privileges 
     */
    hasCategories(privileges) {
        return isSudo(privileges) || privileges.includes(PrivilegeEnum.CATEGORIES);
    }
}

const PrivilegeEnum = {
    SUDO: 'SUDO',
    READ: 'READ',
    CREATE: 'CREATE',
    EDIT: 'EDIT',
    LIKE: 'LIKE',
    DELETE: 'DELETE',
    RECRUITER: 'RECRUITER',
    TIME: 'TIME',
    LABELS: 'LABELS',
    CATEGORIES: 'CATEGORIES',
}

module.exports = {
    Privileges,
    PrivilegeEnum
};