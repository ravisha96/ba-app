/**
 * Created by ravisha on 13/05/2015.
 */
///<reference path="../../path.ts"/>
    

module IndexedDB {

    interface Config {
        dbName: string;
        ver?: number;
    }

    declare var $;

    export class Connect implements Config{

        private _indexedDB: IDBFactory;
        public dbName: string;
        public ver: number;

        constructor (dbName?: string, ver?: number) {
            // var declaration.
            this._indexedDB  = window.indexedDB;

            // If passed with function param it will considered it,
            // else it will take the value from Application Configuration
            // file.
            this.dbName = dbName || BAConfig.DbName;
            this.ver = ver || BAConfig.DbVersion;
        }

        /**
         * Setup can be called while creating a new database and assigning
         * object stores to it.
         *
         * @param object store configuration setting goes here.
         */
        setup = (callback) => {
            var openRequest;

            openRequest = this._indexedDB.open(this.dbName, this.ver);
            openRequest.onupgradeneeded = (event) => {
                var dbInstance: IDBDatabase = event.target.result;

                if(callback) {
                    callback(dbInstance);
                } else {
                    throw "createObjectStore() method of the IDBDatabase interface required.";
                }

            }
        }

        /**
         * If database exist or on setup of new database.
         *  This method will be called and this will open
         *  the database connection for CRUD operations.
         *
         * @returns {JQueryPromise<Object>}
         */
        createConnection = () => {

            var openRequest, defer;

            defer = $.Deferred();

            openRequest = this._indexedDB.open(this.dbName, this.ver);
            /**
             * on creation of new database or version upgradation this method is
             * invoked.
             * @type {function(any): undefined}
             */
            openRequest.onupgradeneeded = this.setup;
            openRequest.onsuccess = (event) => {
                defer.resolve(event.target.result);
            };
            return defer.promise();

        }

    }
}