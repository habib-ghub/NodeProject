const expr = require('express');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const mon = new schema({
    name:String,
    age:Number
});
const data = mongoose.model('data', mon);
var item = new data({
    name:"Badhaasaa",
    age:17
});
mongoose.connect('mongodb://localhost/MOGO');
mongoose.connection.once('open',function(){
    console.log('Connection has been created!');
}).on('error', function(error){
    console.log("Error occured", error);
});

 item.save();