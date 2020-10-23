const express=require("express");
const cookieParser = require("cookie-parser");
const app=express();
const path=require("path");

const db=require('./config/mongoose');

const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");

const MongoStore = require("connect-mongo")(session);

const port=9000;

app.use(express.urlencoded());
app.use(cookieParser());

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(
    session({
      name: "quiz-time",
      secret: "assignment",
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 1000 * 60 * 100,
      },
      store: new MongoStore(
        {
          mongooseConnection: db,
          autoRemove: "disabled",
        },
        function (err) {
          console.log(err || "Connected to mongo db");
        }
      ),
    })
  );
  

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);
app.use('/',require('./routes/index'));

app.listen(port,(err)=>{
    if(err){
        console.log("error in creating the server");
        return ;
    }
    console.log("server is up and running");
});

