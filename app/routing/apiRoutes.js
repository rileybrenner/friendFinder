var friends = require("../data/friends.js")

module.exports = function(app) {
// Displays all friends
app.get("/api/friends", function (req, res) {
return res.json(friends);
});

// Create New Friends - takes in JSON input
app.post("/api/friends", function (req, res) {
// req.body hosts is equal to the JSON post sent from the user
// This works because of our body parsing middleware
var totalDifference = 0;
var bestMatch = {
    name: "",
    photo: "",
    friendDifference: 1000
};
var userData = req.body;
var userName = userData.name;
var userScores = userData.scores;

var b = userScores.map(function(item) {
return parseInt(item, 10);
});

userData = {
    name: req.body.name,
    photo: req.body.photo,
    scores: b
};

console.log("Name: " + userName);
console.log("User Score: " + userScores);

var sum = b.reduce((a, b) => a + b, 0);
console.log("Sum of users score: " + userScores);
console.log("Best match friend diff: " + bestMatch.friendDifference);
console.log("+++++++===========");


});

};
