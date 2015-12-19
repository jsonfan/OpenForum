var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: String,
  post_count: Number,
  comment_count: Number,
  created_at: {type: Date, default: Date.now}
})

var User = mongoose.model('User', UserSchema);

User.schema.path('name').validate(function(value){
    if(!value.trim()) {
      return false;
    }
    else {
      return true;
    }
  },
  "{VALUE} DONT WORK! Must not be blank."
);

// function mustNotBeBlank(input){
//
// }
