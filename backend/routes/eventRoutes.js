const express = require('express');
const eventRouter = express.Router();

const {createEvent} = require("../controllers/eventController");
const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

eventRouter.post("/",protect,
    authorizeRoles("organizer","admin"),createEvent
);

module.exports = eventRouter;