const router = require("express").Router();
const nodemailer = require("nodemailer")
const Quotes = require("../models/quoteModels")
const axios = require("axios")
require("dotenv").config();

// Test route unused later
router.get("/test", (req, res) => {
    res.send("test route")
})

// Route to get all the quotes from the Mongoose Database
router.get("/quotes", async (req, res) => {
    console.log("quotes hit")
    // res.send("quotes route")
    try {
        const allQuotes = await Quotes.find({})
        res.json(allQuotes)
        // console.log(allQuotes.data)

    } catch (error) {
        console.log("Not able to get the quotes", error)
    }

})

router.post("/quotes", async (req, res) => {
    console.log("post quotes hit")
    try {
        const newQuote = new Quotes({
            author: req.body.author,
            quote: req.body.quote,
            submittedBy: req.body.submittedBy,
            email: req.body.email,
            tags: req.body.tags
        })
        const successSave = await newQuote.save()
        res.json(successSave)

    } catch (err) {
        console.log(err)
    }


})

router.get("/externalquote", async (req, res) => {

    try {
        console.log("external quote hit")
        const quoteParams = {
            method: 'GET',
            url: 'https://world-of-quotes.p.rapidapi.com/v1/quotes/quote-of-the-day',
            params: { category: 'inspirational' },
            headers: {
                'X-RapidAPI-Host': 'world-of-quotes.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.quotesAPI
            }
        };

        const getQuote = await axios.request(quoteParams)
        res.json(getQuote.data);

    } catch (error) {
        console.log(error)
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