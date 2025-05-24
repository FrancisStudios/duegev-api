import { MongoClient } from "mongodb";
import DBConfig from "./db.config.js";
import DuegevAPIConstants from "../../constants.js";

export default class DataBaseService {

    connectionResolve; connectionReject

    instance
    connection = new Promise((resolve, reject) => {
        this.connectionResolve = resolve;
        this.connectionReject = reject;
    });

    static async init() {
        if (!this.instance) this.instance = new DataBaseService();
        return this.instance;
    }

    constructor() {

        const client = new MongoClient(DBConfig.URL);
        const databaseConnection = async () => {
            console.log(DuegevAPIConstants.DbConnectionBuilding);
            await client.connect();
            const db = client.db(DBConfig.dbName);
            return db;
        }

        databaseConnection()
            .then((db) => {
                /* Connection Established */
                console.log(DuegevAPIConstants.DbConnectionSuccessful);
                this.connectionResolve(db);
            })
            .catch((error) => {
                /* Connection Failed */
                console.log(DuegevAPIConstants.DbConnectionUpFailed);
            });
    }

    async getConnection() {
        return this.connection;
    }
}