meanDemo.factory('userFactory', function($http){
  var user = {};
  user.name = "";
  return{
    setName: function(input, callback){
      console.log('factory setting name to ' + input);
      user.name = input;
    },
    getName: function(callback){
      callback(user);
    },
    logout: function(){
      console.log('logout this guy', user);
      Name = "";
      console.log(Name);
      user = {};
      console.log('are they still there?', user);
    }
    // getName: function(callback){
    //   callback(user);
    // },
    // setName: function(input, callback){
    //   $http.post('/users', input).then(function(response){
    //     console.log('set name completed', response);
    //     if(response.data.err){
    //        callback(response.data.err);
    //     } else {
    //       user = response.data;
    //       callback(null);
    //     }
    //   });
    // },
    // listAll: function(callback){
    //   $http.get('/users').then(callback);
    // },
    // logout: function(){
    //   console.log('logout this guy', user);
    //   user = {};
    //   console.log('are they still there?', user);
    // }
  }
})
