/**
 *  ------ [ Property of Francis Studios ] ------
 * ===========================
 * github: https://github.com/francisstudios
 * ©2025 Francis Studios Softwares by L.
*/

import DuegevAPIConstants from "../../constants.js";
import Intents from "../../model/intents.js";
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
                        req.query.user ? `${DuegevAPIConstants.forFollowingUserWording} ${req.query.user}` : ``
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

        /* Authenticated User Operations */
        DuegevBackendAPI.post('/auth', (req, res) => {
            let inbound = {
                intent: req.body.intent,
                payload: req.body.query
            }

            switch (inbound.intent) {
                /* Create Users */
                case Intents.createUser:
                    break;

                /* Authenticate Users */
                case Intents.authenticateUser:
                    break;

                /* Update Users */
                case Intents.updateUser:
                    break;

                /*  Delete Users */
                case Intents.deleteUser:
                    break;

            }
        });
    }
}