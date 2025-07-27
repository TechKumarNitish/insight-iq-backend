const express = require("express");
const router = express.Router();
const { getAllMentors } = require("../controller/Mentor");

router.get("/", getAllMentors);

module.exports = router;
