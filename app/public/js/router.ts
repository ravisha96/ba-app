/**
 * Created by ravisha on 19/05/2015.
 */


///<reference path="path.ts"/>

module ba.router {

    'use strict';

    export class Router {

        static $inject = ['$stateProvider', '$urlRoutersProvider'];

        static configRouters($stateProvider: ng.ui.IStateProvider) {

            $stateProvider
                .state('user-entry', {
                    url: '/user-entry',
                    controller: ba.entry.UserEntryController,
                    templateUrl: 'partials/entry/user.tpl.html'
                });
        }
    }

    Router.$inject = ['$stateProvider'];

    angular
        .module('betting-assistance')
        .config(ba.router.Router.configRouters)
}
