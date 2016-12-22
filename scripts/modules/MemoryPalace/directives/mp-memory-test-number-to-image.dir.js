(function () {

    angular.module('MemoryPalace').directive('mpMemoryTestNumberToImage', function () {

        return {

            restrict: 'E',

            scope: {},

            controller: [

                '$scope',
                '$element',

                function ($scope, $element) {

                    /*============ MODEL ============*/

                    $scope.showMode = 'none';


                    /*============ MODEL DEPENDENT METHODS ============*/


                    /*============ BEHAVIOR ============*/

                    $scope.showNumber = function () {
                        $scope.showThisNumber = true;
                    };


                    /*============ LISTENERS ============*/

                    /*============ INITIALIZATION ============*/
                }
            ],

            template: [

                '<div class="row">',
                    '<div class="col-xs-4 col-xs-offset-4 image-column">',

                        '<img src="images/00.jpg"/>',

                    '</div>',
                '</div>',

                '<div class="row">',
                    '<div class="col-xs-4 col-xs-offset-4 text-center">',

                        '<div class="mp-number well" ng-click="showNumber()">',
                            '<div ng-if="showMode === \'none\'"><i class="fa fa-question-circle"></i><i class="fa fa-question-circle"></i></div>',
                            '<div ng-if="showMode === \'group\'"><i class="fa fa-question-circle"></i>{{item.itemNumber}}</div>',
                            '<div ng-if="showMode === \'all\'">{{item.groupNumber}}{{item.itemNumber}}</div>',
                        '</div>',

                    '</div>',
                '</div>',

                '<div class="row">',
                    '<div class="col-xs-12">',

                    '</div>',
                '</div>'

            ].join('')
        };
    });

})();