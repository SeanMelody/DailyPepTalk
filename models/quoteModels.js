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
    submittedBy: {
        type: String
    },
    tags: {
        type: [String],
        required: false
    }

});

// module.export it! as Quotes
module.exports = Quotes = mongoose.model("Quotes", quotesSchema);