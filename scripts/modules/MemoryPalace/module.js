
var sessionConfigs = sessionConfigs || {};

(function(){

    /*========== ENTRY POINT ON DOCUMENT READY FROM THE MAIN TEMPLATE ============*/

    angular.module('MemoryPalace', [
        'ngResource', 'ngCookies', 'ngSanitize', 'ngAnimate',   // angular modules
        'ui.bootstrap', // angular-ui bootstrap component modules
        'ui.router',                                            // angular-ui modules
        'ngStorage'                                             // local storage
    ]);


    /*======================== LOAD VALUES/CONSTANTS ========================*/

    /*======================== LOAD CONFIGURATIONS ========================*/

    // ANIMATION CONFIGS
    angular.module('MemoryPalace').config(function($provide, $animateProvider){

        // do not animate classes which match this pattern
        // so if you don't want animations... include noanim in the classname
        $animateProvider.classNameFilter(/^((?!noanim).)*$/i);
    });


    /*======================== INITIALIZATION ========================*/

    // override the template/modal/window.html template to add some custom accessibility
    angular.module('MemoryPalace').run(["$templateCache", function ($templateCache) {
        $templateCache.put("template/modal/window.html", [
            '<div modal-render="{{$isRendered}}" tabindex="-1"',
                'role="dialog" class="modal"',
                'aria-labelledby="{{$parent.modal.labelId}}"',
                'aria-describedby="{{$parent.modal.contentId}}"',
                'uib-modal-animation-class="fade"',
                'modal-in-class="in"',
                'ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">',
                '<div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'">',
                    '<div class="modal-content" uib-modal-transclude></div>',
                '</div>',
            "</div>"
        ].join(' '));
    }]);

})();
