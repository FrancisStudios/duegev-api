import MessageInterface from "../../utils/message.interface.js";
import DataBaseService from "../db/db.service.js";
import Response from "../response.collection.js";

export default class DuegevAPIAuth {
    static async initEndpoint(DuegevBackendAPI) {

        const dbService = await DataBaseService.init();
        const connection = new Promise(
            (resolve) => {
                dbService.getConnection().then(db => resolve(db));
            }
        );

        /* Simple Queries */
        DuegevBackendAPI.get('/users', (req, res) => {

            /* TODO: this is a test query, but we should list all users and user finder from the GET endpoint */
            //let allUsers = connection.collection('users').find({});
            //let responseData = JSON.stringify(allUsers);

            connection.then((db) => {
                db.collection('users').find({}).then(result => {
                    res.send(
                        MessageInterface
                            .construct(
                                Response.STATUS.OK,
                                JSON.stringify(result)
                            )
                    )
                });
            });
        });

        /* Authenticate Operations */
        DuegevBackendAPI.post('/auth', (req, res) => {
            let inbound = {
                intent: req.body.intent,
                payload: req.body.query
            }

            console.log(`Auth endpoint was hit with [${inbound.intent}]`);

            switch (inbound.intent) {

                /* CREATE */
                case 'create_user':
                    break;

                /* READ */
                case 'authenticate_user':
                    break;

                case 'get_user_by_id':
                    break;

                case 'get_all_users':
                    break;


                /* UPDATE */
                case 'update_user':
                    break;

                /*  DELETE */
                case 'delete_user':
                    break;

            }
        });
    }
}