const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        enum: [
            "Technical",
            "Cultural",
            "Sports",
            "Workshop",
            "Seminar",
            "Other"
        ],
        required: true
    },
    date: {
        type: Date,
        required: true,
        index: true
    },
    
    time: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true,
        trim: true
    },
    maxParticipants: {
        type: Number,
        required: true,
        min: 1
    },
    registeredCount: {
        type: Number,
        default: 0
    },
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status: {
        type: String,
        enum: [
            "Upcoming",
            "Ongoing",
            "Completed"
        ],
        default: "Upcoming"
    }
    
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Event",eventSchema);
