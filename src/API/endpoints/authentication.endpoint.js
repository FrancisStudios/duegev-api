import MessageInterface from "../../utils/message.interface.js";
import DataBaseService from "../db/db.service.js";
import Response from "../response.collection.js";

export default class DuegevAPIAuth {
    static async initEndpoint(DuegevBackendAPI) {

        const dbService = await DataBaseService.init();
        const connection = await dbService.getConnection().then(result => {
            result.collection('users').findOne({ username: 'Francis' }).then(result2 => {
                console.log('result:', result2);
            })
        });

        /* Simple Queries */
        DuegevBackendAPI.get('/users', (req, res) => {

            console.log(connection);
            /* TODO: this is a test query, but we should list all users and user finder from the GET endpoint */
            //let allUsers = connection.collection('users').find({});
            //let responseData = JSON.stringify(allUsers);

            res.send(
                MessageInterface
                    .construct(
                        Response.STATUS.OK,
                        JSON.stringify(connection)
                    )
            )
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