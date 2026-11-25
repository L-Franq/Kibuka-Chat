const router = require("./main.route");
const userController = require("../controller/userController")

router.post("/api/v1/user/regist", userController.insertUser);

module.exports = router;