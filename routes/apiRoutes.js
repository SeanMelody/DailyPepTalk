const router = require("express").Router();

// Test route unused later
router.get("/test", (req, res) => {
    res.send("test route")
})

module.exports = router;