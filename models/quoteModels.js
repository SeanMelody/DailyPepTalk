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
    tags: {
        type: [String],
        required: false
    }

});

// module.export it! as Quotes
module.exports = Quotes = mongoose.model("quotes", quotesSchema);