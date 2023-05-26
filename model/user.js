const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:
    {type:String,
    unique: true},
    email:
    {type:String,
    unique: true},
    phone:Number

})
module.exports=mongoose.model('usersdatas',userSchema)