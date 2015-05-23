/**
 * Created by ravisha on 22/05/2015.
 */

///<reference path="../../path.ts"/>

module AutoComplete {

    interface Suggestions {
        suggestion?(event: Event, isShow?: Boolean) : void;
        isShow: Boolean;
        itemName: any;
        selectedItem?(event: Event): void;
    }

    interface Scope extends ng.IScope {
        ac: Suggestions;
    }

    export class AutoCompleteDirective implements ng.IDirective {
        public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
        public templateUrl = '/partials/common/autoComplete.tpl.html';
        public restrict = 'E';
        public scope = { searchText: '=' };
        isShow: boolean;
        itemName: string;

        constructor() {

            this.link = ( scope: Scope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {

                scope.ac = this;
                scope.ac.isShow= this.isShow;
                scope.ac.itemName = attrs.prop;

                scope.ac.suggestion = (event): void => {
                    scope.ac.isShow = (event.target.value.length === 0) ? false : true;

                    /**
                     * Checks if digest cycle is not running thens
                     * start then digest cycle in order to update
                     * the view.
                     */
                    //if (!scope.$$phase) scope.$apply();
                }

                scope.ac.selectedItem = (event: Event) => {
                    scope.ac.suggestion(true);
                    var elm = event.target;
                    console.log(elm);
                }

            }

        }

        static Factory(): ng.IDirectiveFactory {
            /**
             *  Dependencies can be injected as an arguments in below function call.
             *  Use $inject to get the dependencies, example below
             *  directive.$inject = ['$location', 'toaster'];
             */

            var directive = () =>
            {
                return new AutoCompleteDirective();
            };

            directive['$inject'] = [];

            return directive;
        }

    }

    angular.module('AutoCompleteApp', [])
        .directive('autoComplete', AutoCompleteDirective.Factory());

}