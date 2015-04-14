router.get('/',function(req,res){
mongoose.disconnect();
mongoose.connection.on('mongodb://localhost/login',
if(error){
console.log(error);
}

else{
console.log("we are connected");
}

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String
});

var users = mongoose.model('users', UserSchema);


//res.send(users.find());


});
