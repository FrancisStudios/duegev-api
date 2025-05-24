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

        quotes == 'on'
            ? message = message
            : message == JSON.stringify(message)

        return `{
        "status": "${status}",
        "message": ${quoteSign}${message}${quoteSign}`;
    }

}