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

      res.render('campgrounds/items.ejs');
    
})

module.exports=router;