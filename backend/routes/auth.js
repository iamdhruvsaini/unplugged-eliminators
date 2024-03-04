const express=require('express');
const passport = require('passport');
const router=express.Router();
const CLIENT_URL="http://localhost:5173/";
router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}))
router.get('/auth/google/callback',
        
        passport.authenticate('google',{
            successRedirect:CLIENT_URL,
            failureRedirect:'/auth/login/failed'
        })
    )
router.get('/auth/login/success',(req,res)=>{
    if(req.user){
        res.status(200).json({
            sucess:true,
            message:"successful",
            user:req.user
        })
    }
})
router.get("/auth/logout", (req, res) => {
    req.logout((err)=>{
        if(err)console.log(err);
        res.redirect(CLIENT_URL);

    });
  });
router.get("/auth/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: "failure",
    });
  });

module.exports=router;
