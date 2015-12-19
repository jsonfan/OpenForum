
meanDemo.controller('questionController', function($scope, userFactory, questionFactory, $location){
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
  getQuestion();
  //get question data
  function getQuestion(){
    questionFactory.getQuestion(function(response){
      console.log(response);
      $scope.currentQuestion = response.data;
    })
  }

  $scope.likeAnswer = function(answer, question){
    questionFactory.likeAnswer(answer, question, function(response){
      console.log('resetting scope!');
      getQuestion();
    })
  }


});
