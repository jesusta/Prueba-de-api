const express=require('express');
const router=express.Router();
const path = require('path');

router.get("/",(req,res)=>{
    res.render(path.join(__dirname+'/view/index.ejs'));
});

router.get("/login",(req,res)=>{
    res.render(path.join(__dirname+'/view/login.ejs'));
});

module.exports = router;