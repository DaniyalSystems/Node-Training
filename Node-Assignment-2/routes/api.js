var express = require("express");
var router = express.Router();
var user_controller = require("../controllers/user_controller");

router.post("/create_user", user_controller.createNewUser);
router.post("/update_user", user_controller.updateUser);
router.post("/delete_user", user_controller.deleteUser);
router.post("/login_user", user_controller.loginUser);

module.exports = router;
