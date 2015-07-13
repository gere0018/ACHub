// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

})

// The code below is added based on video from lynda [http://www.lynda.com/AngularJS-tutorials/Implementing-our-first-route/368920/386127-4.html]. The purpose is to create ionic routing for a single page applocation with multiple views instead of loading multiple html pages.

.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    //We are creating an object of tabs that each on of the tabs will inherit from.
    .state("tabs", {
        url: "/tab",
        //we add abstract because we never want to navigate to a page that contains only tab. we want to go to a sub page or sub template.
        abstract: true,
        templateUrl:"templates/tabs.html"

    })
    .state("tabs.home", {
        url: "/home",
        views: {
            "home-tab":{
                templateUrl:"templates/home.html",
                controller: "HomeController"

            }
        }
    })
    .state("tabs.surveys", {
        url: "/surveys",
        views: {
            "surveys-tab":{
                templateUrl:"templates/surveys.html",
                controller: "SurveysController"

            }
        }
    })
    .state("tabs.faqs", {
        url: "/faqs",
        views: {
            "faqs-tab":{
                templateUrl:"templates/faqs.html",
                controller: "FaqsController"

            }
        }
    })
    .state("tabs.map", {
        url: "/map",
        views: {
            "map-tab":{
                templateUrl:"templates/map.html",
                controller: "MapController"

            }
        }
    })
    .state("tabs.phone", {
        url: "/phone",
        views: {
            "phone-tab":{
                templateUrl:"templates/phone.html",
                controller: "PhoneController"

            }
        }
    })
    .state("tabs.events", {
        url: "/events",
        views: {
            "events-tab":{
                templateUrl:"templates/events.html",
                controller: "EventsController"

            }
        }
    })
    //sub-page for links on home page.
    .state("tabs.detail", {
        url: "/home/:aId",
        views: {
            "home-tab":{
                templateUrl:"templates/detail.html",
                controller: "HomeController"

            }
        }
    })
     //sub-page for each survey on surveys page.
    .state("tabs.survey", {
        url: "/surveys/:aId",
        views: {
            "surveys-tab":{
                templateUrl:"templates/survey.html",
                controller: "SurveysController"

            }
        }
    })
    .state("tabs.faq", {
        url: "/faqs/:aId",
        views: {
            "faqs-tab":{
                templateUrl:"templates/faq.html",
                controller: "FaqsController"

            }
        }
    })

//default situation if no url is specified.
    $urlRouterProvider.otherwise("/tab/home");


})

//$scope is the local storage for all the variables in a angular js app.
//the second parameter is because in this controller we want to use the http service of angular.
//the function takes both parameters as well.

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

}])

//added this based on code suggestion (http://forum.ionicframework.com/t/ng-src-not-updated-in-video-tag/7540/5); worked really well to replace the abscence of ng-src for iframes.

.directive('dynamicUrl', function () {
    return {
        restrict: 'A',
        link: function postLink(scope, element, attr) {
            element.attr('src', attr.dynamicUrlSrc);
        }
    };
});






