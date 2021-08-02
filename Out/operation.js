// const sum = (num1,num2)=> num1+num2;
// const PI=3.14;
// const str = "Programming";
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.str = str;
// module.exports = {sum:sum, PI:PI, str:str }

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const dataSchema = new Schema({
    name:String,
    age:Number,
    address:String
});

const operation = mongoose.model('myCollect', dataSchema);
module.exports = operation;