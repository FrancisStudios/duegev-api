/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

export default class MessageInterface {
    /**
     * 
     * @param {status_code} status 
     * @param {string} message
     * @param {boolean} json 
     * @returns 
     */
    static construct(status, message, json=false) {
        let closureSign;
        json
            ? closureSign = ''
            : closureSign = '"'
        let cs = closureSign

        return `{
        "status": "${status}",
        "message": ${cs}${message}${cs}
        }`;
    }

}