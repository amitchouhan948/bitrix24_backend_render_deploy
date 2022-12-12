const mongoose=require("mongoose")

const taskSchema=new mongoose.Schema({
    "title":{type:String,required:true},
    "isActive":{type:Boolean,default:true,required:true},
    "deadline":{type:String, required:true}
})
const Task=mongoose.model("task",taskSchema)
module.exports=Task