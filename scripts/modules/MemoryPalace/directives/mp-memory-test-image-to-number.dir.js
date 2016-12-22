(function () {

    angular.module('MemoryPalace').directive('mpMemoryTestImageToNumber', function () {

        return {

            restrict: 'E',

            scope: {},

            controller: [

                '$scope',
                '$element',
                'MemoryTestService',

                function ($scope, $element, MemoryTestService) {

                    /*============ MODEL ============*/

                    $scope.showMode = 'none';

                    $scope.showGroups = false;

                    $scope.item = {};


                    /*============ MODEL DEPENDENT METHODS ============*/

                    var getNextItem = function () {
                        $scope.item = MemoryTestService.getRandomItem();
                    };


                    /*============ BEHAVIOR ============*/

                    $scope.toggleShowMode = function () {
                        if ($scope.showMode === 'none') {
                            $scope.showMode = 'group';
                        } else if ($scope.showMode === 'group') {
                            $scope.showMode = 'all';
                        } else {
                            $scope.showMode = 'none';
                        }
                    };

                    $scope.toggleShowImageGroups = function () {
                        $scope.showGroups = !$scope.showGroups;
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
                    '<div class="col-xs-4 col-xs-offset-4 image-column text-center">',

                        '<span class="image-wrapper" ng-click="getNextItem()">',
                            '<img src="images/{{item.numberString}}.jpg"/>',
                            '<div class="image-title">{{item.title}}</div>',
                        '</span>',

                    '</div>',
                '</div>',

                '<div class="row">',
                    '<div class="col-xs-6 col-xs-offset-3 text-center">',

                        '<div class="mp-number well" ng-click="toggleShowMode()">',
                            '<span class="mp-number-digit">',
                                '<i class="fa fa-question-circle" ng-if="showMode === \'none\'"></i>',
                                '<span ng-if="showMode !== \'none\'">{{item.groupNumber}}</span>',
                            '</span>',
                            '<span class="mp-number-digit">',
                                '<i class="fa fa-question-circle" ng-if="showMode !== \'all\'"></i>',
                                '<span ng-if="showMode === \'all\'">{{item.itemNumber}}</span>',
                            '</span>',
                        '</div>',

                    '</div>',
                '</div>',

                '<div class="row">',
                    '<div class="col-xs-6 col-xs-offset-3 text-center">',

                        '<div class="row">',
                            '<div class="col-xs-6 text-center">',
                                '<button class="btn btn-default btn-full-width" ng-click="toggleShowMode()">',
                                    '<span ng-if="showMode === \'none\'">Show Group Number</span>',
                                    '<span ng-if="showMode === \'group\'">Show Complete Number</span>',
                                    '<span ng-if="showMode === \'all\'">Hide Number</span>',
                                '</button>',
                            '</div>',
                            '<div class="col-xs-6 text-center">',
                                '<button class="btn btn-default btn-full-width" ng-click="toggleShowImageGroups()">',
                                    '<span ng-if="!showGroups"><i class="fa fa-image"></i> Show Image Groups</span>',
                                    '<span ng-if="showGroups"><i class="fa fa-image"></i> Hide Image Groups</span>',
                                '</button>',
                            '</div>',
                        '</div>',

                    '</div>',
                '</div>',

                '<div class="row margin-top-sm row-thin-columns">',
                    '<div class="col-xs-1"></div>',

                    '<div class="col-xs-1" ng-repeat="groupNumber in item.groupNumbers track by $index" ng-click="setItemByGroupData(groupNumber)">',
                        '<span class="image-wrapper-small">',
                            '<img class="image-preview" src="images/{{item.groupNumbers[$index]}}.jpg"/>',
                        '</span>',
                    '</div>',

                    '<div class="col-xs-1"></div>',
                '</div>'

            ].join('')
        };
    });

})();