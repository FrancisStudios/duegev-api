export default class MessageInterface {
    /**
     * 
     * @param {status_code} status 
     * @param {string} message 
     * @returns 
     */
    static construct(status, message) {
        return `{
        "status": "${status}"
        "message": "${message}"
        }`;
    }

}