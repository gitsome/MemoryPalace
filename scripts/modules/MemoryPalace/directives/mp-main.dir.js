(function () {

    angular.module('MemoryPalace').directive('mpMain', function () {

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

                '<div class="container">',
                    '<div class="row">',
                        '<div class="col-xs-12">',

                            '<h1>Memory Palace Training</h1>',



                        '</div>',
                    '</div>',
                '</div>'

            ].join('')
        };
    });

})();