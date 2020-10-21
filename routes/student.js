const express= require("express");
const router= express.Router();
const studentController= require("../controller/student_controller");

router.get("/home",studentController.home);

router.get("/sign-in",studentController.createsession);

module.exports = router;