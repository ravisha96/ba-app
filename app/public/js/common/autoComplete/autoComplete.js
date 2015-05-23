/**
 * Created by ravisha on 22/05/2015.
 */
///<reference path="../../path.ts"/>
var AutoComplete;
(function (AutoComplete) {
    var AutoCompleteDirective = (function () {
        function AutoCompleteDirective() {
            var _this = this;
            this.templateUrl = '/partials/common/autoComplete.tpl.html';
            this.restrict = 'E';
            this.scope = { searchText: '=' };
            this.link = function (scope, element, attrs) {
                scope.ac = _this;
                scope.ac.isShow = _this.isShow;
                scope.ac.itemName = attrs.prop;
                scope.ac.suggestion = function (event) {
                    scope.ac.isShow = (event.target.value.length === 0) ? false : true;
                    /**
                     * Checks if digest cycle is not running thens
                     * start then digest cycle in order to update
                     * the view.
                     */
                    //if (!scope.$$phase) scope.$apply();
                };
                scope.ac.selectedItem = function (event) {
                    scope.ac.suggestion(true);
                    var elm = event.target;
                    console.log(elm);
                };
            };
        }
        AutoCompleteDirective.Factory = function () {
            /**
             *  Dependencies can be injected as an arguments in below function call.
             *  Use $inject to get the dependencies, example below
             *  directive.$inject = ['$location', 'toaster'];
             */
            var directive = function () {
                return new AutoCompleteDirective();
            };
            directive['$inject'] = [];
            return directive;
        };
        return AutoCompleteDirective;
    })();
    AutoComplete.AutoCompleteDirective = AutoCompleteDirective;
    angular.module('AutoCompleteApp', []).directive('autoComplete', AutoCompleteDirective.Factory());
})(AutoComplete || (AutoComplete = {}));
//# sourceMappingURL=autoComplete.js.map