var friends = require("../data/friends")

module.exports = function(app) {
// Displays all friends
app.get("/api/friends", function (req, res) {
return res.json(friends);
});

// API post requests below

app.post("/api/friends", function (req, res) {

    console.log("I'm inside /api/friends")
// req.body hosts is equal to the JSON post sent from the user
// This works because of our body parsing middleware
var totalDifference = 0;
var bestMatch = {
    name: "",
    photo: "",
    friendDifference: 10000000000000000
};

// results user survey post and parse it, converting user sccore to number instead of string
var userData = req.body;
var userScores = userData.scores;



// for loop to loop through all of the friends possibilities in the database
for(var i = 0; i < friends.length; i++){

// created an if statement to determine the best match for the friend 

    for (var j = 0; j < friends[i].scores.length; j++){
        totalDifference = totalDifference + Math.abs(parseInt(friends[i].scores[j]) - userScores[j])
    }

    if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDifference = totalDifference;

    }

console.log(totalDifference + " Total Difference");

}
console.log(bestMatch);
friends.push(userData);
console.log("New User added");
console.log(userData);
res.json(bestMatch)
// save users data to db and return json with best match

});

};


