/**
 * Created by ravisha on 13/05/2015.
 */
///<reference path="../../path.ts"/>
var IndexedDB;
(function (IndexedDB) {
    var Connect = (function () {
        function Connect(dbName, ver) {
            var _this = this;
            /**
             * Setup can be called while creating a new database and assigning
             * object stores to it.
             *
             * @param object store configuration setting goes here.
             */
            this.setup = function (callback) {
                var openRequest;
                openRequest = _this._indexedDB.open(_this.dbName, _this.ver);
                openRequest.onupgradeneeded = function (event) {
                    var dbInstance = event.target.result;
                    if (callback) {
                        callback(dbInstance);
                    }
                    else {
                        throw "createObjectStore() method of the IDBDatabase interface required.";
                    }
                };
            };
            /**
             * If database exist or on setup of new database.
             *  This method will be called and this will open
             *  the database connection for CRUD operations.
             *
             * @returns {JQueryPromise<Object>}
             */
            this.createConnection = function () {
                var openRequest, defer;
                defer = $.Deferred();
                openRequest = _this._indexedDB.open(_this.dbName, _this.ver);
                /**
                 * on creation of new database or version upgradation this method is
                 * invoked.
                 * @type {function(any): undefined}
                 */
                openRequest.onupgradeneeded = _this.setup;
                openRequest.onsuccess = function (event) {
                    defer.resolve(event.target.result);
                };
                return defer.promise();
            };
            // var declaration.
            this._indexedDB = window.indexedDB;
            // If passed with function param it will considered it,
            // else it will take the value from Application Configuration
            // file.
            this.dbName = dbName || BAConfig.DbName;
            this.ver = ver || BAConfig.DbVersion;
        }
        return Connect;
    })();
    IndexedDB.Connect = Connect;
})(IndexedDB || (IndexedDB = {}));
//# sourceMappingURL=connection.js.map