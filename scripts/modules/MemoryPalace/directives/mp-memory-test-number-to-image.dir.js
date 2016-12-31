(function () {

    angular.module('MemoryPalace').directive('mpMemoryTestNumberToImage', function () {

        return {

            restrict: 'E',

            scope: {},

            controller: [

                '$scope',
                '$element',
                'MemoryTestService',

                function ($scope, $element, MemoryTestService) {

                    /*============ MODEL ============*/

                    $scope.showImage = false;

                    $scope.item = {};


                    /*============ MODEL DEPENDENT METHODS ============*/

                    var getNextItem = function () {
                        $scope.showImage = false;
                        $scope.item = MemoryTestService.getRandomItem();
                    };


                    /*============ BEHAVIOR ============*/

                    $scope.toggleShowImage = function () {
                        $scope.showImage = !$scope.showImage;
                    };

                    $scope.setItemByGroupData = function (itemNumberString) {
                        $scope.item = MemoryTestService.getItemByNumberString(itemNumberString);
                    };

                    $scope.getNextItem = getNextItem;


                    /*============ LISTENERS ============*/


                    /*============ INITIALIZATION ============*/

                    getNextItem();
                }
            ],

            template: [


                '<div class="row">',
                    '<div class="col-xs-6 col-xs-offset-3 text-center">',

                        '<div class="mp-number well no-select" ng-click="getNextItem()">',

                            '<span>',
                                '<span class="mp-number-digit">',
                                    '<span>{{item.groupNumber}}</span>',
                                '</span>',
                                '<span class="mp-number-digit">',
                                    '<span>{{item.itemNumber}}</span>',
                                '</span>',
                            '</span>',

                        '</div>',

                    '</div>',
                '</div>',

                '<div ng-if="!showImage" ng-click="toggleShowImage()">',

                    '<div class="row">',
                        '<div class="col-xs-4 col-xs-offset-4 image-column text-center">',

                            '<span class="image-wrapper no-select">',
                                '<div class="fake-image"><i class="fa fa-question-circle"></i></div>',
                                '<div class="image-title">---</div>',
                            '</span>',

                        '</div>',
                    '</div>',
                '</div>',

                '<div ng-if="showImage">',

                    '<div class="row">',
                        '<div class="col-xs-4 col-xs-offset-4 image-column text-center">',

                            '<span class="image-wrapper no-select" ng-click="getNextItem()">',
                                '<img src="images/{{item.numberString}}.jpg"/>',
                                '<div class="image-title">{{item.title}}</div>',
                            '</span>',

                        '</div>',
                    '</div>',

                '</div>',

                '<div class="row margin-top-sm">',
                    '<div class="col-xs-12 text-center mp-group-title" ng-if="showImage">{{item.groupName}}</div>',
                    '<div class="col-xs-12 text-center mp-group-title" ng-if="!showImage">- - -</div>',
                '</div>',

                '<div class="row margin-top-sm row-thin-columns">',
                    '<div class="col-xs-1"></div>',

                    '<div class="col-xs-1 group-image-container" ng-if="showImage" ng-repeat="groupItem in item.groupItems track by $index" ng-click="setItemByGroupData(groupItem.numberString)">',
                        '<span class="image-wrapper image-wrapper-small">',
                            '<img class="image-preview" src="images/{{groupItem.numberString}}.jpg"/>',
                            '<div class="image-title">{{groupItem.title}}</div>',
                        '</span>',
                    '</div>',

                    '<div class="col-xs-1 group-image-container" ng-if="!showImage" ng-repeat="groupItem in item.groupItems track by $index" ng-click="setItemByGroupData(groupItem.numberString)">',
                        '<span class="image-wrapper image-wrapper-small">',
                            '<span class="fake-image"><i class="fa fa-question-circle"></i></span>',
                            '<div class="image-title">---</div>',
                        '</span>',
                    '</div>',

                    '<div class="col-xs-1"></div>',
                '</div>'

            ].join('')
        };
    });

})();