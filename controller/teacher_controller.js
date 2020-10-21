module.exports.home=(req,res)=>{
    return res.render('teacher_home',{title:'I am Teacher'});
};

module.exports.createsession=(req,res)=>{
   return res.render('student_home',{title:'I am Student'});
};