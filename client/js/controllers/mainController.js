console.log(Name);

meanDemo.controller('mainController', function($scope, userFactory, questionFactory, $location){
  if(Name.length < 1){
    Name = prompt('What is your name?');
  }
  $scope.currentUser = {};
  console.log(Name);
  userFactory.setName(Name);
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

  getQuestions();
  function getQuestions(){

    questionFactory.listAll(function(response){
      console.log(response);
      $scope.questions = response.data;
      console.log('scope questions', $scope.questions);
    })
  }
  $scope.showQuestion = function(question){
    console.log('we want to redirect to this question page ', question)
    //store question we want to show in factory!
    //redirect to SINGLE question page
    questionFactory.setQuestion(question);
    // questionFactory.getQuestion(function(response){
    //   console.log(response);
    // });
    $location.url('question');
  }
  $scope.newAnswer = function(question){
    questionFactory.setQuestion(question);
    console.log('redirecting to answer page');
    $location.url('new_answer');
  }
});
