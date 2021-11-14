const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    
    var result = (weight / (height*height))*703;

    if(result<25)
        res.send("Result : " + result + "good bmi");
    else 
    res.send("Result : " + result + "not healthy");

})

app.listen(3000, function(){
    console.log("Server up and running at port 3000");
})