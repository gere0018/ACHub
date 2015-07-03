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
//default situation if no url is specified.
    $urlRouterProvider.otherwise("/tab/home");


})

//$scope is the local storage for all the variables in a angular js app.
//the second parameter is because in this controller we want to use the http service of angular.
//the function takes both parameters as well.

.controller('HomeController', ['$scope', '$http', function($scope, $http){
    $http.get('js/data.json').success(function(data){
        console.log('succeded in getting data');
        $scope.links = data;
    });

}])

.controller('SurveysController', ['$scope', '$http', function($scope, $http){
    $http.get('js/surveys.json').success(function(data){
        console.log('succeded in getting surveys data');
        $scope.surveys = data;
    });

}])
.controller('CheckboxController', ['$scope', function($scope) {
      $scope.isChecked = {
       value1 : true,
       value2 : false
     };
    //add code to have this tab direct to the direct link of this survey as a subpage if this is select input is checked.
    }]);
//.controller('EventsController', ['$scope', '$http', function(){
//    console.log('activate events controller');
//        window.open("http://www.algonquincollege.com/studentsupportservices/events/", "eventsPage");
//
//    }
//
//]);







