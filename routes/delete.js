var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var bodyParser = require('body-parser');


router.get('/',function(req,res){

mongoose.connect('mongodb://localhost/test');   
var login=require('./schema.js');

var username=req.param('uname');

console.log(username);

login.remove({uname:username},function(err,result){
                                if(!err){
                                    console.log('deletion done succesfully')
                                    if(result===1)
                                    {res.send('deletion done succesfully')}
                                    else
                                     {res.send('No data is deleted')}
                                    mongoose.disconnect();
                                    }
                                    })


});

module.exports = router;
