const Event = require("../models/Event");

const createEvent = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.user);
        const {
            title,
            description,
            category,
            date,
            time,
            venue,
            maxParticipants
        } = req.body;

        const event = await Event.create({
            title,
            description,
            category,
            date,
            time,
            venue,
            maxParticipants,

            organizer: req.user._id,
        });

        res.status(201).json({
            message: "Event Created Successfully",
            event,
        });

    } catch(error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    createEvent,
};