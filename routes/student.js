const express= require("express");
const router= express.Router();
const passport = require('passport');
const studentController= require("../controller/student_controller");

router.get("/home", studentController.home);

router.post("/sign-in", passport.authenticate(
    'local',
    {failureRedirect: '/student/home'},
), studentController.createsession);

router.post('/create',studentController.createuser);

router.get("/sign-up",studentController.signup);
router.get("/log-out",studentController.sign_out);
router.get("/profile",studentController.profile);

module.exports = router;