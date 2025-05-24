export default class MessageInterface {
    /**
     * 
     * @param {status_code} status 
     * @param {string} message 
     * @returns 
     */
    static construct(status, message) {

        let quotes;

        typeof message == 'string'
            ? quotes = 'on'
            : quotes = 'off'

        let quoteSign =
            quotes == 'on'
                ? '"'
                : ''


        return `{
        "status": "${status}",
        "message": ${quoteSign}${messagequoteSign}`;
    }

}