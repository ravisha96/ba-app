/**
 * Created by ravisha on 19/05/2015.
 */

///<reference path="../path.ts"/>


module ba.entry {

    interface BAUserEntry {
        user: Credentials;
    }

    interface Credentials {
        name: string;
        state: string;
        telephone: number;
        register(): void;
        list: any;
    }

    export class UserEntryController implements BAUserEntry {

        user: Credentials;
        name: string;
        state: string;
        telephone: number;
        list: any;

        static $inject = ['$scope', '$timeout'];

        constructor (public $scope, public $timeout) {

            $scope.user  = this;
            /**
             * We are not directly assigning a property to scope to avoid issues with two-way-binding
             * Every directive create its own scope. If we declare a directive ex: ng-show, it will
             * inherit the scope from UserEntryController in prototypical hierarchy. So changing the
             * parent will effect child's, but changes on child's will not bubble. Hence, to create a
             * reference we added a USER property to scope, were ever parent reference needed use
             * USER.PropertyName.
             *
             * @type {{register: (function(): void), name: string, state: string, telephone: number}}
             */
            $scope.user = {
                register: this.register,
                name: this.name,
                state: this.state,
                telephone: this.telephone,
                list: this.list
            };

            this.getUsersList();

        }


        /**
         * Get all registered users from database and update the scope.
         * @returns {{}}
         */
        private getUsersList = (): void => {

            new DB.Table().selectAll([BAConfig.ObjectStores.Register]).done( (result): void => {
                    this.$timeout( () => {
                        this.$scope.user.list = result;
                    }, 10);
            });

        }


        /**
         * Registers a new user.
         */
        register = (): void => {

            /**
             * @param BAConfig Global Object
             */

            new DB.Table().insert([BAConfig.ObjectStores.Register], {
                name: this.$scope.user.name,
                state: this.$scope.user.state,
                telephone: this.$scope.user.telephone
            });
        }

    }

    angular
        .module('ba.entry')
        .controller('ba.entry.UserEntryController', UserEntryController);

}