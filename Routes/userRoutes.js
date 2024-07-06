const express = require("express")
const router = express.Router();
const {signup, signin, getAllUsers,  getUser, updateUser, deleteUser, EditUser, }  = require("../Controllers/UserControllers");
const { authToken } = require("../middleware/Auth");




router.route("/signup").post(signup)
router.route("/signin").post(signin)
router.route("/users").get(authToken, getAllUsers)
router.route("/user/:id").get(authToken, getUser).put(authToken, EditUser).delete(authToken, deleteUser)




module.exports = router