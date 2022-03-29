const router = require("express").Router();

// Test route unused later
router.get("/test", (req, res) => {
    res.send("test route")
})

router.post("/submittedQuote", (req, res) => {
    console.log(req.body)
})

module.exports = router;