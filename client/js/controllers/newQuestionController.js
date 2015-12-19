
meanDemo.controller('newQuestionController', function($scope, userFactory, questionFactory, $location){

  $scope.currentUser = {};
  console.log(Name);
  userFactory.getName(function(data){
    console.log(data);
    if(!data){
      console.log('no name!');
      $location.url('/'); //send them back to root if there is no name
    } else {
      console.log('current user ', data);
      $scope.currentUser = data;
    }
  })

  $scope.createQuestion = function(input){
    console.log('make this new question', input);
    input.author = $scope.currentUser.name;
    console.log(input);
    questionFactory.createQuestion(input, function(response){
      console.log(response);
      $scope.newQuestion = {};
    });
  }
});
