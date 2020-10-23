const User=require('../models/user');

module.exports.home= (req,res) =>{
    return res.render('student_home',{title:'I am Student'});
};

module.exports.profile=(req,res)=>{
  res.send('<h2>Hello User </h2>');
};


module.exports.signup=(req,res)=>{
    if (req.isAuthenticated()) {
        return res.redirect('/student/profile');
      }
      
    return res.render('student_signup',{title:'I am Student'});
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
            return res.redirect('/student/profile');
          });
        } else {
          return res.redirect('back');
        }
      });
};

module.exports.createsession= (req,res) =>{
    if (req.isAuthenticated()) {
        return res.redirect('/student/profile');
      }
    return res.render('student_home',{title:'Wrong credentials entered'});
};

module.exports.sign_out = (req, res) => {
    req.logout();
    res.redirect("/");
  };