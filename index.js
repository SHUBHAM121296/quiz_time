const express=require('express');
const app=express();
const port=9000;

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to earth</h1>');
});

app.listen(port,(err)=>{
    if(err){
        console.log("error in creating the server");
    }
    console.log("server is up and running");
});