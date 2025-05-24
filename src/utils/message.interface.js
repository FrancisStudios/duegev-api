export default class MessageInterface {
    /**
     * 
     * @param {status_code} status 
     * @param {string} message
     * @param {boolean} json 
     * @returns 
     */
    static construct(status, message, json) {

        return `{
        "status": "${status}",
        "message": ${message}
        }`;
    }

}