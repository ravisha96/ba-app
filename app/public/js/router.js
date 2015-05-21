/**
 * Created by ravisha on 19/05/2015.
 */
///<reference path="path.ts"/>
var ba;
(function (ba) {
    var router;
    (function (router) {
        'use strict';
        var Router = (function () {
            function Router() {
            }
            Router.configRouters = function ($stateProvider) {
                $stateProvider.state('user-entry', {
                    url: '/user-entry',
                    controller: ba.entry.UserEntryController,
                    templateUrl: 'partials/entry/user.tpl.html'
                });
            };
            Router.$inject = ['$stateProvider', '$urlRoutersProvider'];
            return Router;
        })();
        router.Router = Router;
        Router.$inject = ['$stateProvider'];
        angular.module('betting-assistance').config(ba.router.Router.configRouters);
    })(router = ba.router || (ba.router = {}));
})(ba || (ba = {}));
//# sourceMappingURL=router.js.map