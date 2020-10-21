const express=require("express");
const app=express();
const path=require("path");
//const db=require('./config/mongoose');
const port=9000;

app.use(express.urlencoded());

// setting up the template engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));



// app.get('/',(req,res)=>{
//     //res.send('<h1>Welcome to earth</h1>');
//     return res.render('home',{title:'I am flying'});
// });

app.use('/',require('./routes/index'));

app.listen(port,(err)=>{
    if(err){
        console.log("error in creating the server");
        return ;
    }
    console.log("server is up and running");
});