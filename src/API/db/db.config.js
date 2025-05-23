export default class DBConfig {
    static URL = 'mongodb://mongoadmin:mongopassword@172.20.0.45:27017/';
    static dbName = 'duegev-db';
    static Collections = {
        users: 'users',
        documents: 'documents'
    };
}