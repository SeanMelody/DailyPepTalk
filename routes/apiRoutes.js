const router = require("express").Router();
const nodemailer = require("nodemailer")
const Quotes = require("../models/quoteModels")
require("dotenv").config();

// Test route unused later
router.get("/test", (req, res) => {
    res.send("test route")
})

// Route to get all the quotes from the Mongoose Database
router.get("/quotes", (req, res) => {

    try {
        const allQuotes = Quotes.find({})
        res.json(all)
        console.log(allQuotes.data)

    } catch (error) {
        console.log("Not able to get the quotes")
    }

})

router.post("/addQuote", (req, res) => {

    try {
        const newQuote = new Quote({
            author: req.body.author,
            quote: req.body.quote,
            submittedBy: req.body.submittedBy,
            email: req.body.email,
            tags: req.body.tags
        })
        const successSave = newBook.save()
        res.json(successSave)

    } catch (err) {
        res.status().send("error saving new Quote: ", err)
    }


})

// console.log(process.env.EPASS)

// Transporter for emailing a new messasge to me!
// Messages sent via my throw away email and password: hidden in .ENV
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EPASS,
    }
})

router.post("/submittedQuote", (req, res, next) => {
    // console.log(req.body)
    // Set the message contents
    const newQuote = req.body
    // `Quote: ${req.body.quote}
    // Author: ${req.body.author}
    // Submitted By: ${req.body.submittedBy}
    // Email: Need to set up email
    // Tags: ${req.body.tags}`
    console.log(newQuote)

    const subject = `New Submitted Quote from ${req.body.submittedBy}`

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: subject,
        html:
            `
        <!DOCTYPE html>
        <html>
        <head>
        <style>
            body {
            background-color: linen;
            }
        
            h1 {
            color: maroon;
            margin-left: 40px;
            }
        </style>
        </head>
        <body>
            <h3>Author: ${newQuote.author}</h3>
            <p>Quote: ${newQuote.quote}</p>
            <h4>Submitted by: ${newQuote.submittedBy}</h4>
            <h4>Submitted by: ${newQuote.email}</h4>
            <h4><a href="google.com">Email: Need to set this up</a></h4>
            <p>Tags: ${newQuote.tags}</p>
            <img src="../client/public/Favicon.png">

        </body>
        </html>
        `
    }

    // Send the mail and check for errors with transporter and nodemailer
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log("email sent")
        }
    })


})

module.exports = router;