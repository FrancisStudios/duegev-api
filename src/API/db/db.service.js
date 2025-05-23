import { MongoClient } from "mongodb";
import DBConfig from "./db.config.js";
import DuegevAPIConstants from "../../constants.js";

export default class DataBaseService {

    instance
    connection

    static init() {
        if (!this.instance) this.instance = new DataBaseService();
        return this.instance;
    }

    constructor() {
        console.log('Building database connection');
        MongoClient.connect(DBConfig.URL, (error, db) => {
            if (error) console.log(DuegevAPIConstants.DbConnectionFailed);
            else {
                this.connection = db.db(DBConfig.dbName);
                console.log(DuegevAPIConstants.DbConnectionSuccessful);
            }
        });
    }
}