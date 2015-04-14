fs = require('fs');
var express = require('express');
var mainPage = express.Router();


mainPage.get('/',function(req,res){
fs.readFile('./html/login.html', function (err, data) {
      if(err) {
      console.log(err);}
      
      else{
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
      }
});
});
module.exports=mainPage;


