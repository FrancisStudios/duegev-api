import DuegevAPIConstants from "../../constants.js";
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

        /* Request all users or a specific user (?user=username) */
        DuegevBackendAPI.get('/users', (req, res) => {

            let userFindQuery;

            req.query.user
                ? userFindQuery = { username: req.query.user }
                : userFindQuery = {};

            connection.then((db) => {
                db.collection('users').find(userFindQuery).toArray().then(result => {

                    console.log(
                        DuegevAPIConstants.RequestToUsersEndpoint,
                        req.query.user ? `for following user ${req.query.user}` : ``
                    );

                    const response = JSON.stringify(result);
                    res.send(
                        MessageInterface
                            .construct(
                                Response.STATUS.OK,
                                response,
                                true
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