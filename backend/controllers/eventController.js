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

const getAllEvents = async (req, res) => {
    try {

        const events = await Event.find()
            .populate("organizer", "name email")
            .sort({ date: 1 });

        res.status(200).json({
            count: events.length,
            events,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const getEventById = async (req,res) => {
    try{
        const {id} = req.params;

        const event = await Event.findById(id)
            .populate("organizer","name email");

        if(!event){
            return res.status(404).json({
                messsage: "Event not Found",
            });
        }

        res.status(200).json(event);

    }catch(error){
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    createEvent,
    getAllEvents,
    getEventById,
};