const express = require("express");
const bodyParser = require("body-parser");
const app = express()
app.use(bodyParser.urlencoder({extended:true}))
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000,function(){
    console.log("everything is working fine");
});