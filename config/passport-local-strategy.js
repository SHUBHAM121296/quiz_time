const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          console.log("Error in finding the user grace to passport");
          return done(err);
        }
        if (!user || user.password != password) {
          console.log("Error in finding the user grace to passport");
          return done(err, false);
        } else {
          return done(null, user);
        }
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    if (err) {
      console.log("Error in finding the user grace to passport");
      return done(err);
    }
    return done(null, user);
  });
});

passport.checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log("user signed in");
    return next();
  }
  return res.redirect("/");
};

passport.setAuthenticatedUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log("local set 11111");
    res.locals.user = req.user;
  }
  console.log("local not set 11111");
  next();
};

module.exports = passport;
