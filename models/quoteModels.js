// Required Const for Mongoose
const mongoose = require("mongoose")

const quotesSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true
    },
    from: {
        type: String
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid email"],
        required: false
    },
    date: {
        type: Date,
        default: Date.now,
    },
    tags: {
        type: [String],
        required: false
    },
    authorId: {
        type: String,
        // required: true,
    }

});

// module.export it! as Quotes
module.exports = Quotes = mongoose.model("quotes", quotesSchema);