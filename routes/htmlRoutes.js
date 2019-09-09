var db = require("../models");

module.exports = function (app) {
    app.get("/events", function (req, res) {
        db.event.findAll({ raw: true })
            .then(function (result) {
                console.log(result)
                res.render("events", { events: result });
            })
    })
}