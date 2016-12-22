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

                    $scope.testMode = false;


                    /*============ MODEL DEPENDENT METHODS ============*/

                    var clearMode = function () {
                        $scope.testMode = false;
                    };


                    /*============ BEHAVIOR ============*/

                    $scope.doNumberToImage = function () {
                        $scope.testMode = 'numberToImage';
                    };

                    $scope.doImageToNumber = function () {
                        $scope.testMode = 'imageToNumber';
                    };


                    /*============ LISTENERS ============*/

                    $scope.$on('mp-memory-test-image-to-number.done', clearMode);
                    $scope.$on('mp-memory-test-number-to-image.done', clearMode);


                    /*============ INITIALIZATION ============*/
                }
            ],

            template: [

                '<div class="container">',

                    '<div class="row">',
                        '<div class="col-xs-12">',
                            '<h1 class="text-center">Memory Palace Training</h1>',
                        '</div>',
                    '</div>',


                    '<div class="row" ng-if="!testMode">',
                        '<div class="col-xs-4 col-xs-offset-4">',

                            '<div class="btn-group btn-group-justified">',
                                '<label class="btn btn-default" ng-click="doImageToNumber()">Image to Number</label>',
                                '<label class="btn btn-default" ng-click="doNumberToImage()">Number to Image</label>',
                            '</div>',

                        '</div>',
                    '</div>',

                    '<mp-memory-test-number-to-image ng-if="testMode === \'numberToImage\'"></mp-memory-test-number-to-image>',
                    '<mp-memory-test-image-to-number ng-if="testMode === \'imageToNumber\'"></mp-memory-test-image-to-number>',

                '</div>'

            ].join('')
        };
    });

})();