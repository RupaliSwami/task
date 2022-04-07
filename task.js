
const express= require("express");
const app=express();

app.get('/',function(req,res){
  res.send("Welcome!");
});

app.listen(2000,function(err,results){
  
    if(err) throw err;
     console.log("Server is running on port 2000");
});
