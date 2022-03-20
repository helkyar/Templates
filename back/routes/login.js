const router = require("express").Router();

router.post("/login", require("../controllers/checkLogin"));

module.exports = router;
