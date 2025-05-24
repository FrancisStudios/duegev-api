import { MongoClient } from "mongodb";
import DBConfig from "./db.config.js";
import DuegevAPIConstants from "../../constants.js";

export default class DataBaseService {

    instance
    connection

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
                this.connection = db;

                let result = db.collection('users').findOne({ username: 'Francis' });
                console.log('result:', result);
            })
            .catch((error) => {
                /* Connection Failed */
                console.log(DuegevAPIConstants.DbConnectionUpFailed);
            });
    }

    async getConnection() {
        await this.connection;
        return this.connection;
    }
}