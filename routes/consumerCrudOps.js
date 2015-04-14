var express = require('express');
var router = express.Router();	
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var myEvents=require('./myEvents.js');
var json2html = require('node-json2html');


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/:id',function(req,res){
mongoose.connect('mongodb://localhost/houseServices');


var customer=require('./consumerSchema.js');

var id=req.params.id;
console.log(id);
	

customer.find({_id:id},function(err,stu){
     res.send(400,stu);
     console.dir(stu,mongoose.disconnect(function(err){
                                           if(err)
                                              {console.log("problem")}
                                           else
                                               {console.log("connection closed")}
                                            }))
});

});


router.get('/',function(req,res){

mongoose.connect('mongodb://localhost/houseServices');
var customer=require('./consumerSchema.js');
	

customer.find({},function(err,stu){
     res.send(400,stu);
     console.dir(stu,mongoose.disconnect(function(err){
                                           if(err)
                                              {console.log("problem")}
                                           else
                                               {console.log("connection closed")}
                                            }))
});

});





router.post('/',function(req,res){
     
var conn=mongoose.connect('mongodb://localhost/houseServices');   
var consumer=require('./consumerSchema.js');
var provider=require('./providerSchema.js');

var interest=req.param('interestCategory');
var subinterest=req.param('interestSubCategory');
console.log("interest is"+interest);

var newConsumer = new consumer(req.body);
console.log("user is:"+newConsumer);

	
 newConsumer.save(function(err){
	if(err){console.log("error while insertion consumer data") }
	else{
             console.log('data inserted succesfully');
             var findQuery={category:interest,subCategory:subinterest};
             var projection={_id:0,eventName:1,eventDesc:1,date:1,time:1,providerName:1,providerMobileno:1};

                provider.find(findQuery,projection,function(err,interests){
                        //var transform = {'tag':'h1','html':'${eventName} ,${eventDesc}'};
                        var transform={"tag":"table","border":"1","width":"70%","children":[
    {"tag":"tbody","children":[
        {"tag":"tr","children":[
            {"tag":"td","children":[
                {"tag":"b","html":"EventName"}
              ]},
            {"tag":"td","children":[
                {"tag":"b","html":"EventDiscription"}
              ]},
            {"tag":"td","children":[
                {"tag":"b","html":"Date"}
              ]},
            {"tag":"td","children":[
                {"tag":"b","html":"Time"}
              ]},
            {"tag":"td","children":[
                {"tag":"b","html":"OrganizorName"}
              ]},
            {"tag":"td","children":[
                {"tag":"b","html":"OrganizorPhone"}
              ]}
          ]},
        {"tag":"tr","children":[
            {"tag":"td","html":"${eventName}"},
            {"tag":"td","html":"${eventDesc}"},
            {"tag":"td","html":"${date}"},
            {"tag":"td","html":"${time}"},
            {"tag":"td","html":"${providerName}"},
            {"tag":"td","html":"${providerMobileno}"}
          ]}
      ]}
  ]}
                        //console.log( json2html.transform(interests,transform) );
                	res.send(200,json2html.transform(interests,transform));
                	mongoose.disconnect(function(err){
                                           if(err)
                                              {console.log("problem in post consumercrud connection")}
                                           else
                                               {console.log("connection closed")}
                                            })
});


             //mongoose.disconnect(function(err){if(err){console.log('problem in connection close')}})
             }

});
});


router.delete('/:id',function(req,res){

mongoose.connect('mongodb://localhost/houseServices');   
var customer=require('./customerSchema.js');

var id=req.params.id;

customer.remove({_id:id},function(err,result){
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
