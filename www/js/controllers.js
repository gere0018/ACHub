
angular.module('controllers', [])

.controller('HomeController', ['$scope', '$http', '$state',
                               function($scope, $http, $state){
    $http.get('js/data.json').success(function(data){
        $scope.links = data;
        $scope.whichlink=$state.params.aId;
    });

}])

.controller('SurveysController', ['$scope', '$http', '$state',
                                  function($scope, $http, $state){
    $http.get('js/surveys.json').success(function(data){
        $scope.surveys = data;
        $scope.whichsurvey =$state.params.aId;
    });

}])
.controller('FaqsController', ['$scope', '$http', '$state',
                               function($scope, $http, $state){
    $http.get('js/faqs.json').success(function(data){
        $scope.faqs = data;
        $scope.whichFaq=$state.params.aId;
    });

}]);
