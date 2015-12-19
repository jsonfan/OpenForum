meanDemo.factory('postFactory', function($http){
  return{
    // createPost: function(input, callback){
    //   $http.post('/posts', input).then(function(response){
    //     callback(response);
    //   });
    // },
    // listAll: function(callback){
    //   $http.get('/posts').then(callback);
    // },
    // createComment: function(input, post_id, callback){
    //   $http.post('/posts/'+post_id, input).then(function(response){
    //     console.log('creating comment');
    //     callback(response);
    //   })
    // },
    // likeComment: function(comment, post, callback){
    //   console.log('post factory trying to like comment ' + comment._id);
    //   $http.post('/like/'+comment._id, post).then(function(response){
    //     console.log('http post');
    //     console.log(response);
    //     callback(response);
    //   })
    // },
    // dislikeComment: function(comment, post, callback){
    //   console.log('post factory trying to dislike comment ' + comment._id);
    //   $http.post('/dislike/'+comment._id, post).then(function(response){
    //     console.log('http post');
    //     console.log(response);
    //     callback(response);
    //   })
    // }
  }
})
