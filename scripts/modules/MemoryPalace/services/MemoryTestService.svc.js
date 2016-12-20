(function () {

    angular.module('MemoryPalace').service('MemoryTestService', [

        function () {

            /*============ SERVICE DECLARATION ============*/

            var LoadingService = {};


            /*============ PRIVATE METHODS AND VARIABLES ============*/


            /*============ SERVICE DEFINITION ============*/

            LoadingService.isLoading = false;

            LoadingService.setIsLoading = function (isLoading) {
                LoadingService.isLoading = isLoading;
            };

            /*============ LISTENERS ============*/

            /*============ SERVICE PASSBACK ============*/

            return LoadingService;
        }
    ]);

})();

