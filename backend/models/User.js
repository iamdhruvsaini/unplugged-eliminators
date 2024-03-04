const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
    },
    projects:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
    }],
    img:{
        type:String,
        trim:true
    }


    
})
const User=mongoose.model('User',userSchema);
module.exports=User;