/**
 * Created by ravisha on 22/05/2015.
 */
///<reference path="../../path.ts"/>
var AutoComplete;
(function (AutoComplete) {
    angular.module('autoCompleteApps', []).directive('autoComplete', AutoCompleteDirective.factory()).controller('AutoCompleteController', AutoCompleteController);
    var AutoCompleteDirective = (function () {
        function AutoCompleteDirective() {
            this.restrict = 'A';
            this.templateUrl = "autoComplete.tpl.html";
            this.replace = true;
            this.link = function (scope, element, attrs, ctrl) {
            };
        }
        AutoCompleteDirective.factory = function () {
            /**
             *  Dependencies can be injected as an arguments in below function call.
             *  Use $inject to get the dependencies, example below
             *  directive.$inject = ['$location', 'toaster'];
            */
            var directive = function () { return new AutoCompleteDirective(); };
            return directive;
        };
        return AutoCompleteDirective;
    })();
    angular.module('AutoCompleteApp').directive('AutoCompleteDirective', AutoCompleteDirective.factory());
    var AutoCompleteController = (function () {
        function AutoCompleteController() {
        }
        return AutoCompleteController;
    })();
})(AutoComplete || (AutoComplete = {}));
//# sourceMappingURL=autoComplete.js.map