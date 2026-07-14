const express = require('express');
const eventRouter = express.Router();

const {createEvent,getAllEvents,getEventById} = require("../controllers/eventController");
const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

eventRouter.get("/", getAllEvents);
eventRouter.get("/:id", getEventById);

eventRouter.post("/",protect,
    authorizeRoles("organizer","admin"),createEvent
);


module.exports = eventRouter;