var express = require('express');
var routerUpdate = express.Router();

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

routerUpdate.get('/',function(req,res){
res.send(400,'this is the time from users');

});


module.exports = routerUpdate;
