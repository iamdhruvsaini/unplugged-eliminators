const express=require('express');
const Project = require('../models/Projects');
const User = require('../models/User');
const router=express.Router();
router.get('/profile',async(req,res)=>{
        let newUser=new User({
            name: "John Doe",
            email: "john@example.com",
            img: "profile.jpg"
        })
        let project=new Project({
                name: "Project 2",
                link: "project2link",
                author: newUser._id 
        })
        newUser.projects.push(project._id);
        await project.save();
        await newUser.save();
        res.send("hehehe");
})
module.exports=router;