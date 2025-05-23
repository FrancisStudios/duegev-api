import { MongoClient } from "mongodb";
import DBConfig from "./db.config";
import DuegevAPIConstants from "../../constants";

export default class DataBaseService {

    instance
    connection

    static init() {
        if (!this.instance) this.instance = new DataBaseService();
        return this.instance;
    }

    constructor() {
        MongoClient.connect(DBConfig.URL, (error, db) => {
            if (error) console.log(DuegevAPIConstants.DbConnectionFailed);

            this.connection = db.db(DBConfig.dbName);
        });
    }
}