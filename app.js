var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());

// prepopulated tweets in memory
// one kill server, new tweets will be wiped
// list of objects, with a text and time property.
var tweets = [
  {text: "Hai dude.", time: new Date().getTime() - 12300},
  {text: "This is cool.", time: new Date().getTime() - 1000},
  {text: "What's up?", time: new Date().getTime()},
];

app.use(express.static(__dirname + '/public'));

// asking the server to give what's here. 
app.get('/ajax', function(request, response) {
	// telling the client the server is sending back json
  response.type('json');
  // response will be the list of tweets
  response.end(JSON.stringify({tweets:tweets}));
});
// most interesting part here. Make a new tweet request, from the browser, which is sending Json. time is the new date. 
app.post('/ajax', function(request, response) {
  var newTweet = {text: request.body.tweet, time: new Date().getTime()};
  // adding to our tweet list 
  tweets.push(newTweet);
  // telling the client, we received your info, i'm going to print out what I've saved
  response.type('json');
  response.end(JSON.stringify(newTweet));
});

var server = app.listen(8080);