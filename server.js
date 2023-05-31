const express = require("express");
const app = express();
const bodyParser = require ("body-parser");
const port = 3000;

app.use (bodyParser.urlencoded({extended:true}));
app.get("/",function (req,res) {
    res.sendFile (__dirname +"/index.html");
})




app.post('/', function (req, res) {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    var bmi = (weight)/(height*height);
    res.send('Your BMI is '+ bmi);
  })


app.listen (port, function(){
    console.log("Server running on port 3000.");
})

