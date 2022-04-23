const express=require('express');
const router=express.Router();
const Item=require('../models/Item');
const catchAsync = require("../utils/catchAsync.js");
const ExpressError=require('../utils/ExpressError.js');
const methodOverride = require("method-override");
const {itemSchema}=require('../schemas.js');
const {storage}=require('../cloudinary');
const {isLoggedIn,validateCampground,isAuthor}=require('../middleware');
const multer  = require('multer');
const upload = multer({storage});



router.get('/',(req,res)=>{

      res.render('items/new.ejs');
    
})



router.get('/medicine',(req,res)=>{

      res.render('items/medicine.ejs');
    
})


router.get('/electronic',(req,res)=>{

      res.render('items/electronic.ejs');
    
})

router.get('/study',(req,res)=>{

      res.render('items/study.ejs');
    
})

router.get('/general_stuff',(req,res)=>{

      res.render('items/general_stuff.ejs');
    
})


module.exports=router;