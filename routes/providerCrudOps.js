var express = require('express');
var routerProvider = express.Router();	
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var autoIncrement=require('mongoose-auto-increment');
var cheerio = require('cheerio');


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

var urlencodedParser = bodyParser.urlencoded({ extended: false })


routerProvider.get('/:eventName',function(req,res){
mongoose.connect('mongodb://localhost/houseServices');


var provider=require('./providerSchema.js');

var eventName=req.params.eventName;
console.log(eventName);
	
	
provider.find({eventName:eventName},function(err,eventDetail){

     mongoose.disconnect(function(err){if(err){console.log(err)}
     
     console.log(eventDetail);
     
    	 $ = cheerio.load("<!DOCTYPE html> <html lang='en'> <head> <title>Bootstrap Example</title> <meta charset='utf-8'> <meta name='viewport' content='width=device-width, initial-scale=1'> <link rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'> <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script> <script src='http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js'></script> </head> <body> <div class='container' style='background-color:white;'> <br><br><div class='row'> <div class='col-md-12' style='background-color:white;'> <h1 class='text-info' id='interest'><b></b> </div>  <div class='row'> <div class='col-md-10' style='background-color:white;'><br><br> <font size='6' class='text-success'>Event Name		:</font> <font id='eventName' size='6' class='text-info'></font> <br><font size='6' class='text-success'>Discription	:</font> <font id='eventDesc' size='6' class='text-info'></font><br>  <font size='6' class='text-success'>Date:</font> <font id='date' size='6' class='text-info'></font> <br><font size='6' class='text-success'>Organizer Name	:</font> <font id='providerName' size='6' class='text-info'><br></font> <br> <font size='6' class='text-success'>Organizer MobileNo:</font> <font id='providerMobileno' size='6' class='text-info'></font><br> <font size='6' class='text-success'>Organizer Web	:</font> <font id='providerSite' size='6' class='text-info'></font></div><div class='row'> <div class='col-md-12' style='background-color:white;' align='center'><br><br> <a href='#' class='btn btn-info btn-lg'>Find This event Interesting </a> </div><div class='row'> <div class='col-md-12' style='background-color:white;' >  <label for='comment'>Comment:</label> <textarea class='form-control' rows=5 id='comment'></textarea> </div>  </div> </body>  </html>")       
       
       $('#interest').text(eventDetail[0].category);
       $('#eventName').text(eventDetail[0].eventName);
       $('#eventDesc').text(eventDetail[0].eventDesc);
       $('#date').text(eventDetail[0].date);
       $('#providerName').text(eventDetail[0].providerName);
       $('#providerMobileno').text(eventDetail[0].providerMobileno);
       $('#providerSite').text(eventDetail[0].providerSite);
       

    
      res.send(200,$.html());
     
                                                                                     
                                                                                       })
});

});


routerProvider.get('/',function(req,res){

mongoose.connect('mongodb://localhost/houseServices');
var provider=require('./providerSchema.js');
	

provider.find({},function(err,stu){
     res.send(400,stu);
     console.dir(stu,mongoose.disconnect(function(err){
                                           if(err)
                                              {console.log("problem")}
                                           else
                                               {console.log("connection closed")}
                                            }))
});

});





routerProvider.post('/',function(req,res){
            
var conn=mongoose.connect('mongodb://localhost/houseServices');   
var provider=require('./providerSchema.js');


var newProvider = new provider(req.body);
console.log("user is:"+newProvider);

 newProvider.save(function(err){
	if(err){console.log("error while insertion") }
	else{console.log(req.body);
             res.send('data inserted succesfully');
             mongoose.disconnect(function(err){if(err){console.log('problem in connection close')}})}

});
});


routerProvider.delete('/:id',function(req,res){

mongoose.connect('mongodb://localhost/houseServices');   
var provider=require('./providerSchema.js');

var id=req.params.id;

provider.remove({_id:id},function(err,result){
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


module.exports = routerProvider;
