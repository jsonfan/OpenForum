var meanDemo = angular.module('meanDemo', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: '/partials/main.html'
    })
    .when('/main', {
      templateUrl: '/partials/main.html'
    })
    .when('/new_question', {
      templateUrl: '/partials/new_question.html'
    })
    .when('/question', {
      templateUrl: '/partials/question.html'
    })
    .when('/new_answer', {
      templateUrl: '/partials/new_answer.html'
    })
    .when('/logout', {
      templateUrl: '/partials/login.html'
    })
    .otherwise({
      templateUrl: '/partials/login.html'
    })
  })
