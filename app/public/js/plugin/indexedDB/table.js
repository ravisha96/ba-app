/**
 * Created by ravisha on 14/05/2015.
 */
///<reference path="../../path.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DB;
(function (DB) {
    'use strict';
    var Table = (function (_super) {
        __extends(Table, _super);
        function Table() {
            var _this = this;
            _super.call(this);
            this.insert = function (tables, data) {
                var defer = $.Deferred(), transaction;
                _this.createConnection().done(function (dbInstance) {
                    transaction = dbInstance.transaction(tables, 'readwrite').objectStore(tables[0]).put(data);
                    defer.resolve(transaction);
                });
                return defer.promise();
            };
            this.selectAll = function (tables) {
                var defer = $.Deferred(), list = [];
                _this.createConnection().done(function (dbInstance) {
                    dbInstance.transaction(tables).objectStore(tables[0]).openCursor().onsuccess = function (event) {
                        var cursor = event.target.result;
                        if (!cursor)
                            return;
                        list.push(cursor.value);
                        defer.resolve(list);
                        cursor.continue();
                    };
                });
                return defer.promise();
            };
            this.selectOnly = function (tables, key) {
                var defer = $.Deferred();
                _this.createConnection().done(function (dbInstance) {
                    dbInstance.transaction("register").objectStore("register").get(key).onsuccess = function (event) {
                        console.log(event.target);
                    };
                });
                return defer.promise();
            };
        }
        return Table;
    })(IndexedDB.Connect);
    DB.Table = Table;
})(DB || (DB = {}));
//# sourceMappingURL=table.js.map