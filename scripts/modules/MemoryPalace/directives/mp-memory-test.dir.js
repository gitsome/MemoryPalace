(function () {

    angular.module('MemoryPalace').directive('mpMemoryTest', function () {

        return {

            restrict: 'E',

            scope: {},

            controller: [

                '$scope',
                '$element',

                function ($scope, $element) {

                    /*============ MODEL ============*/

                    /*============ MODEL DEPENDENT METHODS ============*/

                    /*============ BEHAVIOR ============*/

                    /*============ LISTENERS ============*/

                    /*============ INITIALIZATION ============*/
                }
            ],

            template: [

                '<div class="row">',
                    '<div class="col-xs-4 col-xs-offset-4 image-column">',

                        '<img src="images/00.jpg"/>',

                    '</div>',
                '</div>'

            ].join('')
        };
    });

})();