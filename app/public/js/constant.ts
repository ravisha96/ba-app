/**
 * Created by developer on 18/05/15.
 */
///<reference path="path.ts"/>

module Defaults {


    export interface BAConstant {
        DbName: string;
        DbVersion: number;
        DbCreatedLogger?: storesCreatedLogger;
        ObjectStores: ObjectStore;
    }

    /**
     * List of tables
     */
    interface ObjectStore {
        Register: string;
    }

    /**
     * List of logger messages.
     */
    interface storesCreatedLogger {
        UserCreated: string;
    }
}

    var BAConfig: Defaults.BAConstant = {
        DbName: 'betting-assistance',
        DbVersion: 1,
        DbCreatedLogger: {
            UserCreated: 'setting up users..'
        },
        ObjectStores: {
            Register: 'register'
        }
    };

