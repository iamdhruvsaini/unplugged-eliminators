const mongoose=require('mongoose');
const projectSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    link:{
        type:String,
        trim:true 
    }

    
})
const Project=mongoose.model('Project',projectSchema);
module.exports=Project;