/**
 * Created by ravisha on 22/05/2015.
 */

///<reference path="../../path.ts"/>
module AutoComplete {

    angular.module('autoCompleteApps', [])
        .directive('autoComplete', AutoCompleteDirective.factory())
        .controller('AutoCompleteController', AutoCompleteController);

    class AutoCompleteDirective implements ng.IDirective {
        restrict = 'A';
        templateUrl = "autoComplete.tpl.html";
        replace = true;

        constructor() {
        }

        link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any) => {

        }

        static factory(): ng.IDirectiveFactory {
            /**
             *  Dependencies can be injected as an arguments in below function call.
             *  Use $inject to get the dependencies, example below
             *  directive.$inject = ['$location', 'toaster'];
            */

            var directive = () => new AutoCompleteDirective();

            return directive;
        }
    }

    angular.module('AutoCompleteApp')
        .directive('AutoCompleteDirective', AutoCompleteDirective.factory());

    class AutoCompleteController {

    }
}