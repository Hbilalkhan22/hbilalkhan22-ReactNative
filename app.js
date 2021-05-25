var express = require('express');
var routes = require('./controller/routes');
var bodyparser = require('body-parser');
var mongoose=require('mongoose');
var app = express();
//var mysession = require('express-session');

        app.set("view engine","ejs");

  // middle ware for showing bootstrap functons and design
        app.use(express.static(__dirname + '/views'));
// how to write defalut layout for ejs?see

  // Middle ware for body of handing post requires
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({ extended : true }));

  // midle ware for routes
        app.use(routes);
  
   
  // mongoose connection
        mongoose.connect('mongodb://localhost/Ebook', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
  // we're connected!
   });
         mongoose.Promise = global.Promise;

         app.use(function(err,req,res,next){
	     console.log("Opps! Error occur :"+err);
});	

app.listen(1000,function(){
	console.log("Go To port 1000");
});