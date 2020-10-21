const express=require("express");
const router=express.Router();
const teacherController=require("../controller/teacher_controller");

router.get("/home",teacherController.home);

router.get("/sign-in",teacherController.createsession);

module.exports=router;