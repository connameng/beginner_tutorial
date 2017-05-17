$.ajax({
  type: "GET",
  url:"/ajax",
  success: function(data) {
    for (var i = 0; i < data.tweets.length; i++) {
      appendNewTweet(data.tweets[i]);
    }
  }
});
var surveyJSON = { title: "Tell us, what technologies do you use?", pages: [
  { name:"page1", questions: [ 
      { type: "radiogroup", choices: [ "Yes", "No" ], isRequired: true, name: "frameworkUsing",title: "Do you use any front-end framework like Bootstrap?" },
      { type: "checkbox", choices: ["Bootstrap","Foundation"], hasOther: true, isRequired: true, name: "framework", title: "What front-end framework do you use?", visibleIf: "{frameworkUsing} = 'Yes'" }
   ]},
  { name: "page2", questions: [
    { type: "radiogroup", choices: ["Yes","No"],isRequired: true, name: "mvvmUsing", title: "Do you use any MVVM framework?" },
    { type: "checkbox", choices: [ "AngularJS", "KnockoutJS", "React" ], hasOther: true, isRequired: true, name: "mvvm", title: "What MVVM framework do you use?", visibleIf: "{mvvmUsing} = 'Yes'" } ] },
  { name: "page3",questions: [
    { type: "comment", name: "about", title: "Please tell us about your main requirements for Survey library" } ] }
 ]
}

function appendNewTweet(tweet) {
  var newTweet =  "<div class='tweet-container'>" +
    "<div class='tweet-time'>" + new Date(tweet.time).toLocaleString() + "</div>" +
    "<div class='tweet-body'>" + tweet.text + "</div>" +
    "</div>";

  $('#tweets-target').prepend(newTweet);
}

$('#tweet').click(function() {
  $.ajax({
    type: "POST",
    url: "/ajax",
    contentType: 'application/json',
    data: JSON.stringify({tweet: $('#new-tweet').val()}),
    success: function(data) {
      appendNewTweet(data);
      $('#new-tweet').val('');
    }
  })
});