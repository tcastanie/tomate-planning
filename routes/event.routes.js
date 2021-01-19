module.exports = app => {
    const events = require("../controllers/event.controller.js");
    var router = require("express").Router();

    // Create a new Event
    router.post("/", events.create);

    // Retrieve all Events
    router.get("/", events.findAll);

    // Retrieve a single Event with id
    router.get("/:id", events.findOne);

    // Update an Event with id
    router.put("/:id", events.update);

    // Delete an Event with id
    router.delete("/:id", events.delete);

    // Delete all Events
    router.delete("/", events.deleteAll);

    // Retrieve all published Events
    router.get("/published", events.findAllPublished);

    app.use('/events', router);
};