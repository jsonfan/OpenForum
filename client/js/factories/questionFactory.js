meanDemo.factory('questionFactory', function($http){
  var question = {};
  return{
    createQuestion: function(input, callback){
      console.log('we are trying to create the question' ,input);
      $http.post('/questions', input).then(function(response){
        // callback(response);
        if(response.data.err){
          callback(response.data.err);
        } else {
          callback(response);
        }
      });
    },
    listAll: function(callback){
      $http.get('/questions').then(callback);
    },
    setQuestion: function(info){
      question = info;
      console.log('factory question is now', question);
      //route to questions/id
      // $http.get('/questions/'+info._id).then(function(response){
      //
      // })
    },
    getQuestion: function(callback){
      $http.get('/questions/' + question._id).then(function(output){
        console.log(output);
        callback(output);
      })
      // callback(question);
    },
    createAnswer: function(input, question_id, callback){
      console.log('we are trying to create the answer', input);
      console.log('with q id ', question_id);
      $http.post('/questions/'+question_id, input).then(function(response){
        console.log('creating answer');
        callback(response);
      })

    },
    likeAnswer: function(input, question, callback){
      console.log('trying to like ' + input._id);
      console.log('with q id ', question._id);
      $http.post('/like/'+input._id, question).then(function(response){
        console.log('liking answer');
        callback(response);
      })
    }
  }
})
