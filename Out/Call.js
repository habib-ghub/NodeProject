// const call = require("./operation");
// console.log(call.sum(2,3));
// console.log(call.PI);
// console.log(call.str);
// console.log(Math.floor((Math.random() * 10) + 1));

const mongoose = require('mongoose');
const peration = require('./operation');



mongoose.connect('mongodb://localhost/monData');
mongoose.connection.once('open', function(){
console.log("Connection has been made! Congratulations!!");
var data = new peration({
    name:"Habib",
    age: 25,
    address: "'Aastu'"
});
data.save();

}).on('error', function(error){
 console.log("Error while connecting...", error);
});



