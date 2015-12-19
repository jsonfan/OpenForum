var mongoose = require('mongoose');

var Answers = mongoose.Schema({
   message: String,
   user: String,
   details: String,
   likes: {type: Number, default: 0},
   created_at: {type: Date, default: Date.now}
})

//we're trying to do this with embedded comments in documents in the post model!
// as well as linking to the user model
var QuesionSchema = mongoose.Schema({
  question: String,
  description: String,
  author: String,
  answer_count: {type: Number, default: 0},
  answers: [Answers],
  created_at: {type: Date, default: Date.now}

})

var Question = mongoose.model('Question', QuesionSchema);

//validations!
// Post.schema.path('message').required(true);
var minQuestionLength = [10, 'The value of path `{PATH}` (`{VALUE}`) is shorter than the minimum allowed length ({MINLENGTH}).'];
var minAnswerLength = [5, 'The value of path `{PATH}` (`{VALUE}`) is shorter than the minimum allowed length ({MINLENGTH}).'];
Question.schema.path('question').validate(function(value){
    if(value.trim() < 10){
      return false;
    } else {
      return true;
    }
  },
  "{VALUE} LESS THAN 10 CHARACTERS!"
);
