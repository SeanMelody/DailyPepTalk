// Required Consts!
const express = require("express");
const app = express();
require("dotenv").config();


//Set up the port for Heroku depoloyment and development to 5050 cause I'm crazy!
const PORT = process.env.PORT || 5050;


// Middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Herku Optimization
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
})