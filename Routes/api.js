const express = require("express");
const router = express.Router();

const {
    addNewPost,
    data
} = require("../Controllers/controller")
    
router.route("/add-new-post").post(addNewPost)
router.route("/data").get(data)
    
module.exports = router;