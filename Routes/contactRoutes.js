const express = require("express")
const router = express.Router();



const { ContactDetails, getAllDetails, getDetails, deleteDetails } =  require("../Controllers/contactController");
const upload = require("../middleware/fileUpload");
const { authToken } = require("../middleware/Auth");

router.route("/details").post(upload.single("resume"),  ContactDetails)
router.route("/allDetails").get(authToken, getAllDetails)
router.route("/detail/:id").get(authToken, getDetails).delete(authToken, deleteDetails)



module.exports = router