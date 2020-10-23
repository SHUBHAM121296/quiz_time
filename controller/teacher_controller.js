const User=require('../models/user');

module.exports.home=(req,res)=>{
    return res.render('teacher_home',{title:'I am Teacher'});
};

module.exports.profile=(req,res)=>{

};

module.exports.signup=(req,res)=>{
    if (req.isAuthenticated()) {
        return res.redirect('/teacher/profile');
      }
    return res.render('teacher_signup',{title:'I am teacher'});
};

module.exports.createuser=(req,res)=>{
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
      }
      User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
          console.log("Error in finding the user in sign up");
          return;
        }
        if (!user) {
          User.create(req.body, (err, user) => {
            if (err) {
              console.log("Error in creating the user");
              return;
            }
            return res.redirect('/teacher/sign-in');
          });
        } else {
          return res.redirect('back');
        }
      });
};

module.exports.createsession= (req,res) =>{
    if (req.isAuthenticated()) {
        return res.redirect('/teacher/profile');
      }
    return res.render('teacher_home',{title:'I am teacher'});
};

module.exports.sign_out = (req, res) => {
    req.logout();
    res.redirect("/");
  };