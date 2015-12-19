var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function(){
  return{
    createQuestion: function(req, res){
      console.log('in the questions controller');
      console.log(req.body);
      var question = new Question(req.body);
      question.save(function(err){
        if(err){
          res.json({err: err});
        }
        else {
          res.json(true);
        }
      })
    },
    listAll: function(req, res){
      Question.find({}).populate('answers').exec(function(err, questions){
        res.json(questions);
      })
    },
    getQuestion: function(req, res){
      console.log('this is the question we are trying to get', req.params.id);
      Question.findOne({_id: req.params.id}).populate('answers').exec(function(err, question){
        res.json(question);
      })
    },
    createAnswer: function(req, res){
      console.log('trying to create answer');
      console.log('answer details', req.body);
      console.log('question id ', req.params.id);
      Question.findOne({_id: req.params.id}, function(err, question){
        question.answers.push(req.body);
        question.answer_count = question.answer_count +1;
        question.save(function(err){
          res.json(err);
        })
      })
    },
    likeAnswer: function(req, res){
      console.log('trying to like answer');
      console.log('req body _id is the q id', req.body);
      console.log('answer id ', req.params.id);
      Question.findOne({_id:req.body._id}).populate('answers').exec(function(err, question){
        console.log('here is the query result', question);
        var answer = question.answers.id(req.params.id);
        console.log('this is the answer we are trying to like', answer);
        answer.likes = answer.likes + 1;
        question.save(function(err){
          res.json(err);
        })
      })
    }
  }
})();
