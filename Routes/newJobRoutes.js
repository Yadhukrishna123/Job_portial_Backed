const express = require("express")
const router = express.Router();
const { createJob, getAllJob,  getJob, updateJob, deleteJob } = require("../Controllers/newJobController");
const { authToken } = require("../middleware/Auth");

router.route("/postJob").post( createJob)
router.route("/jobs" ).get(authToken, getAllJob)
router.route("/job/:id").get(authToken, getJob).put(authToken, updateJob).delete(authToken, deleteJob)



module.exports = router 