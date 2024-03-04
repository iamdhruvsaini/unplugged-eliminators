const mongoose=require('mongoose');
const skillSchema=new mongoose.Schema({
    aiml:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    frontend:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    backend:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    UI:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    video:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ]
}
    

    
)
const Skill=mongoose.model('Skill',skillSchema);
module.exports=Skill;