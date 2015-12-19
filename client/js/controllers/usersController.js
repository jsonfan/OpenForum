meanDemo.controller('usersController', function($scope, userFactory, $location){
  $scope.currentUser = {};
  userFactory.logout();
  $location.url('/main');
})
