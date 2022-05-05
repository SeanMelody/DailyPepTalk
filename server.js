// Required Consts!
const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const mongoose = require("mongoose")

//Set up the port for Heroku deployment and development to 5000
const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// For Authenticaion
app.use(session({ secret: JWT_SECRET }));

// Heroku Optimization
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

//Routes
app.use("/api", require("./routes/apiRoutes"))
app.use("/users", require("./routes/userRoutes"))
app.use("/register", require("./routes/confirmRoutes"))

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// Using Mongoose for MongoDB, Quotes
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/Quotes",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) throw err;
        console.log("Connected to Quotes database")
    }
);

app.listen(PORT, () => {
    console.log(`listening at https://localhost:${PORT}`);
})