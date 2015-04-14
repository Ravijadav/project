var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var bodyParser = require('body-parser');


router.get('/',function(req,res){

mongoose.connect('mongodb://localhost/test');   
var login=require('./schema.js');

var username=req.param('uname');
var password=req.param('password');

console.log(username);

login.update({uname:username},{$set:{pass:password}},function(err,result){
                                if(!err){
                                    console.log('update done succesfully')
                                    if(result===1)
                                    {res.send('update done succesfully')}
                                    else
                                     {res.send('No data is updated')}
                                    mongoose.disconnect();
                                    }
                                    })


});

module.exports = router;
