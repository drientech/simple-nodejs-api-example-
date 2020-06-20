var express = require("express");
var app = express();
var request = require('request');

app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.render("search");
});



app.get("/result", function (req, res) {
  var query =req.query.search;
  var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
     
         
            request(url, function (error, response, body) {

  if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
             res.render("results", { data: data });

                          }
                
                          else {
                              res.send("error");
                          }
                 });

});



//error
app.get("*",function(req,res) {
     res.send("error");
});


app.listen(3001, function( ){
 console.log("contected");
});

