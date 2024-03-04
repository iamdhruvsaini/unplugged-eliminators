const express=require('express');
const Project = require('../models/Projects');
const router=express.Router();
router.get('/home/projects',async(req,res)=>{
        let projects=await Project.find();
        res.status(201).send(projects);
})
router.get('/home/project/aiml',async(req,res)=>{
    let projects=await Project.find();
    res.status(201).send(projects.aiml);
})
router.get('/home/project/frontend',async(req,res)=>{

})
router.get('/home/project/backend',async(req,res)=>{

})
router.get('/home/project/aiml',async(req,res)=>{

})
router.get('/home/project/aiml',async(req,res)=>{

})
module.exports=router;