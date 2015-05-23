/**
 * Created by ravisha on 19/05/2015.
 */
///<reference path="../path.ts"/>
var ba;
(function (ba) {
    var entry;
    (function (entry) {
        var UserEntryController = (function () {
            function UserEntryController($scope, $timeout) {
                var _this = this;
                this.$scope = $scope;
                this.$timeout = $timeout;
                /**
                 * Get all registered users from database and update the scope.
                 * @returns {{}}
                 */
                this.getUsersList = function () {
                    new DB.Table().selectAll([BAConfig.ObjectStores.Register]).done(function (result) {
                        _this.$timeout(function () {
                            _this.$scope.user.list = result;
                        }, 10);
                    });
                };
                /**
                 * Registers a new user.
                 */
                this.register = function () {
                    /**
                     * @param BAConfig Global Object
                     */
                    new DB.Table().insert([BAConfig.ObjectStores.Register], {
                        name: _this.$scope.user.name,
                        state: _this.$scope.user.state,
                        telephone: _this.$scope.user.telephone
                    });
                };
                $scope.user = this;
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
            UserEntryController.$inject = ['$scope', '$timeout'];
            return UserEntryController;
        })();
        entry.UserEntryController = UserEntryController;
        angular.module('ba.entry').controller('ba.entry.UserEntryController', UserEntryController);
    })(entry = ba.entry || (ba.entry = {}));
})(ba || (ba = {}));
//# sourceMappingURL=user.controller.js.map