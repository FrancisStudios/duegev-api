/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

export default class CreateUser {
    instance
    connection

    static getInstance(connection) {
        if (!this.instance) this.instance = new CreateUser(connection);
        return this.instance;
    }

    constructor(connection) {
        this.connection = connection;
    }
}