var path = require("path");
module.exports = function(app) {
    // Routes
    // =============================================================

    // Basic route that sends the user first to the home Page, applying routing paths to buttons in survey
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    


    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });


  
}



