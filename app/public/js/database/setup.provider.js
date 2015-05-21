///<reference path="../path.ts"/>
var ba;
(function (ba) {
    var setup;
    (function (setup) {
        var Database = (function () {
            function Database() {
                /**
                 * Users Registration Store will be created.
                 */
                this.createUsersStore = function () {
                    new IndexedDB.Connect(BAConfig.DbName, BAConfig.DbVersion).setup(function (db) {
                        if (!db.objectStoreNames.contains(BAConfig.ObjectStores.Register)) {
                            var usersObjectStore = db.createObjectStore(BAConfig.ObjectStores.Register, {
                                keyPath: 'id',
                                autoIncrement: true
                            });
                            usersObjectStore.createIndex('telephone', 'phone', { unique: true });
                            usersObjectStore.createIndex('name', 'name', { unique: false });
                            usersObjectStore.transaction.oncomplete = function () {
                                // Need to implement message logger.
                                BAConfig.DbCreatedLogger.UserCreated;
                            };
                        }
                    });
                };
                this.createUsersStore();
            }
            return Database;
        })();
        setup.Database = Database;
        angular.module('betting-assistance').run(Database);
    })(setup = ba.setup || (ba.setup = {}));
})(ba || (ba = {}));
//# sourceMappingURL=setup.provider.js.map