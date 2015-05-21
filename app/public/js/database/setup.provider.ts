///<reference path="../path.ts"/>

module ba.setup {



    export class Database {

        constructor() {
            this.createUsersStore();
        }

        /**
         * Users Registration Store will be created.
         */
        createUsersStore = (): void => {

            new IndexedDB.Connect(BAConfig.DbName, BAConfig.DbVersion)
                .setup( (db: IDBDatabase): void => {
                    if(! db.objectStoreNames.contains(BAConfig.ObjectStores.Register)) {
                        var usersObjectStore =
                            db.createObjectStore(BAConfig.ObjectStores.Register, {
                                keyPath: 'id',
                                autoIncrement: true,
                            });

                            usersObjectStore.createIndex('telephone', 'phone', {unique: true});
                            usersObjectStore.createIndex('name', 'name', {unique: false});
                            usersObjectStore.transaction.oncomplete = () => {
                                // Need to implement message logger.
                                BAConfig.DbCreatedLogger.UserCreated;
                            };
                    }
                });

        }

    }

    angular
        .module('betting-assistance')
        .run(Database);

}