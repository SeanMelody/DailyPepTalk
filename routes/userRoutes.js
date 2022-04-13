const router = require("express").Router();
const auth = require("../middleware/auth");
const { register, login, getUser } = require("../controllers/userController");

// Get route to get the user
router.get("/", auth, getUser)

// Post a new user to the database at users/register
router.post("/register", register)

// users/login to get the user
router.post("/login", login)

// Export as router
module.exports = router;