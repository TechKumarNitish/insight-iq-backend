const express = require("express")
const {addTechnology}=require("../controller/Technology")

const router = express.Router()

router.post("/add", addTechnology);

module.exports = router