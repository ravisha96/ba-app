/**
 * Created by ravisha on 14/05/2015.
 */
///<reference path="../../path.ts"/>
    


module DB {

    'use strict';

    declare var $;

    export class Table extends IndexedDB.Connect {

        constructor () {

            super();

        }

        insert = (tables: string[], data: Object) => {
            var defer = $.Deferred(),
                transaction;
            this.createConnection().
                done( (dbInstance: IDBDatabase) => {

                    transaction = dbInstance.transaction(tables, 'readwrite')
                    .objectStore(tables[0])
                    .put(data);

                    defer.resolve(transaction);
                });

            return defer.promise();
        }


        selectAll = (tables: string[]) => {

            var defer = $.Deferred(), list: Object[] =  [];

            this.createConnection().
                done( (dbInstance: IDBDatabase) => {

                    dbInstance.transaction(tables).objectStore(tables[0])
                        .openCursor().onsuccess = (event) => {
                            var cursor: IDBCursorWithValue = event.target.result;

                            if(!cursor) return;
                            list.push(cursor.value);
                            defer.resolve(list);
                            cursor.continue();
                        }
                });

            return defer.promise();
        }

        selectOnly = (tables: string[], key) => {
            var defer = $.Deferred();
            this.createConnection().
                done( (dbInstance: IDBDatabase) => {

                    dbInstance.transaction("register").objectStore("register")
                        .get(key).onsuccess = function(event) {
                            console.log(event.target);
                        };
                });

            return defer.promise();
        }

    }

}