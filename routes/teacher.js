const express=require("express");
const router=express.Router();
const passport = require('passport');
const teacherController=require("../controller/teacher_controller");

router.get("/home",teacherController.home);

router.get("/sign-in", passport.authenticate(
    'local',
    {failureRedirect: '/teacher/home'},
), teacherController.createsession);

router.post('/create',teacherController.createuser);

router.get("/sign-up",teacherController.signup);

router.get('/student/profile',teacherController.profile);

module.exports=router;